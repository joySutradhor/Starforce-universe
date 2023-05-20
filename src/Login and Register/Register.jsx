import React, { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from './Provider';
import UseTitle from '../Shared/UseTitle';

const Register = () => {
    UseTitle("Register")
    const { handleRegisterUser , handleUpdateProfile  } = useContext(AuthContext) ;
    const [err , setErr] = useState(false) ;
    const handleRegister =(event) =>{
        setErr("")
        event.preventDefault()
        const form = event.target ;
        const email = form.email.value ;
        const password = form.password.value ;
        const name = form.name.value ;
        const photo = form.imageUrl.value ;

        console.log(email , password)
        handleRegisterUser(email ,password)
        .then(result =>{
            const notify = () => toast("Registation Completed !!");
            notify()
            const registeredUser = result.user ;
            handleUpdateProfile(name , photo)
            .then(() => {})
            .catch((err) => {
                
            })
            form.reset()
        })
        .catch(err => {
           setErr(err.message) 
        })
    }
    return (
        <div className="hero py-10 bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleRegister}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder=" Your Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image Url</span>
                            </label>
                            <input type="text" name='imageUrl' placeholder="Image Url" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <button>Already have account? <Link to="/login"  className='text-indigo-800' >Login</Link></button>
                    </form>
                    <ToastContainer />
                </div>
                    {
                    setErr && <p className='py-5 text-center text-red-400 '>{err}</p>
                }
                
            </div>
        </div>
    );
};

export default Register;