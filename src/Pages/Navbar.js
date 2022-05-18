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
        <div className="navbar bg-base-300 px-14">
            <div className="flex-1 px-2 lg:flex-none">
                <a className="text-2xl font-bold">TODO</a>
            </div>
            <div className="flex justify-end flex-1 px-2">
                <div className="flex items-stretch">
                    <Link to="/home" className="btn btn-ghost rounded-btn">Home</Link>
                    <Link to="/todo" className="btn btn-ghost rounded-btn">Todo</Link>
                    {!user ? <Link to="/signin" className="btn btn-ghost rounded-btn">Sign in</Link> : <button onClick={logout} className="btn btn-ghost">SIGN OUT</button>}

                </div>
            </div>
        </div>
    );
};

export default Navbar;