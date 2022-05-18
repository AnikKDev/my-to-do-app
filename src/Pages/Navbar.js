import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };
    return (
        <div class="navbar bg-base-300 px-14">
            <div class="flex-1 px-2 lg:flex-none">
                <a class="text-2xl font-bold">TODO</a>
            </div>
            <div class="flex justify-end flex-1 px-2">
                <div class="flex items-stretch">
                    <Link to="/home" class="btn btn-ghost rounded-btn">Home</Link>
                    <Link to="/todo" class="btn btn-ghost rounded-btn">Todo</Link>
                    {!user ? <Link to="/signin" class="btn btn-ghost rounded-btn">Sign in</Link> : <button onClick={logout} class="btn btn-ghost">SIGN OUT</button>}

                </div>
            </div>
        </div>
    );
};

export default Navbar;