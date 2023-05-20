import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from './Provider';
import UseTitle from '../Shared/UseTitle';


const Login = () => {
    UseTitle("Login")
    const { handleloginUser , handleGoogle } = useContext(AuthContext);
    const [err, setErr] = useState("");
    const navigate = useNavigate();
    const googelNavgate = useNavigate();
    const location = useLocation();
    console.log(location)
    const from = location.state?.from?.pathname || "/";
    console.log(from)

    const handleLogin = (event) => {
        event.preventDefault();
        setErr("")
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        handleloginUser(email, password)
            .then(result => {
                const notify = () => toast("Login Completed !!");
                notify()
                form.reset();
                navigate(from, { replace: true })
            })
            .catch(err => {
                setErr(err.message)
            })
    }

    const handleGoogleAuth = () => {
        handleGoogle() 
        .then (result => {
            googelNavgate("/")
        })
        .catch ()
        console.log("its worked")
    }







    return (
        <div className="hero py-10 bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body w-[350px]" onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            
                        </div>
                        <div className="form-control my-5">
                            <button className="btn btn-primary">Login</button>
                        </div>

                        <button onClick= {handleGoogleAuth} className="btn btn-outline btn-success py-4">  Google </button>

                        <button>New to Food Point ? <Link to="/register" className='text-indigo-800' >Register</Link></button>
                        <ToastContainer />
                    </form>
                </div>
                {
                    setErr && <p className='text-center text-red-400' >{err}</p>
                }
            </div>
        </div>
    );
};

export default Login; 