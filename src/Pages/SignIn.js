import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
const SignIn = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [
        signInWithEmailAndPassword,
        emailUser,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password);
        reset()
    };

    useEffect(() => {
        if (emailUser || googleUser) {
            navigate(from, { replace: true })
        };
    }, [emailUser, googleUser, navigate, from]);
    return (
        <div className="items-center justify-center flex">
            <div class="card w-96 bg-base-100 shadow-xl ">
                <div class="card-body">
                    <h2 class="card-title text-center">SIGN IN</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("email", {
                            required: {
                                value: true,
                                message: "email is required"
                            }
                        })}
                            type="email"
                            placeholder="Email" class="input input-bordered w-full my-6" />
                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        </label>


                        <input
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: "password is required"
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Must be six characters or longer'
                                }
                            })}
                            type="password"
                            placeholder="Password" class="input input-bordered w-full my-6" />

                        <label className="label">
                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        </label>

                        <button type='submit' class="btn mt-6 w-full max-w-xs">SIGN IN</button>
                        <p>Already have an account? <Link to="/signup"><span className="font-bold ">Sign Up</span></Link></p>
                    </form>
                    <div class="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} type='submit' class="btn">SIGN IN WITH GOOGLE</button>
                </div>
            </div>
        </div>
    );
};

export default SignIn;