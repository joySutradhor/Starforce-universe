import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3BottomLeftIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { AuthContext } from '../Login and Register/Provider';

const Header = () => {
    const { user, logout } = useContext(AuthContext);
    const [showName, setShowName] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const handleLogout = () => {
        logout()
            .then()
            .catch(err => { })
    }
    const handleMouseEnter = () => {
        setShowName(true);
    }
    const handleMouseLeave = () => {
        setShowName(false);
    };
    return (
        <nav className='md:flex justify-around items-center md:py-6 pt-5 bg-slate-50'>
            <div className='text-center'>
                <Link to="/" className='text-2xl font-mono '>Food Point</Link>
            </div>
            <div onClick={() => setIsOpen(!isOpen)} className='md:hidden ml-5 '>
                <span> {isOpen ? <XMarkIcon className="h-8 w-8 text-red-500" /> : <Bars3BottomLeftIcon className="h-8 w-8 text-blue-500" />}</span>
            </div>
            <div className={`md:flex md:gap-[150px] items-center bg-slate-900 md:bg-slate-50  absolute md:static duration-500 ${isOpen ? "left-0" : "-left-44"}`}>
                <div className='p-5'>
                    <ul className='md:flex gap-10 font-serif text-white md:text-black'>
                        <li className={location.pathname === "/" ? "text-indigo-600 " : ""}>
                            <p><Link to="/">Home</Link></p>
                        </li>
                        <li className={location.pathname === "/allComics" ? "text-indigo-600 " : ""}>
                            <Link to="/allComics" >All Comics</Link>
                        </li>
     
                        {
                            user ?  <div className='flex gap-5'>
                                <li className={location.pathname === "/myComic" ? "text-indigo-600 " : ""}>
                            <Link to="/myComic" >My Comics</Link>
                        </li>
                                <li className={location.pathname === "/addComic" ? "text-indigo-600 " : ""}>
                            <Link to="/addComic" >Add Comic</Link>
                        </li>
                            </div>: "" 
                        }

                        <li className={location.pathname === "/blog" ? "text-indigo-600" : ""}>
                            <Link to="/blog" className='mt-[15px]'>Blog</Link>
                        </li>
                    </ul>
                </div>
            
            <div className=' flex gap-10 p-2'>
                {
                    user ? <div className='flex items-center justify-center gap-4'>
                        <img className='h-[40px] w-[40px] rounded-full ' src={user?.photoURL} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} alt="profile img" />
                        {
                            showName && <div className="tooltip tooltip-open tooltip-bottom absolute top-[75px] right-[210px] " data-tip={user?.displayName}>

                            </div>
                        }
                        <button className='btn btn-outline btn-success' onClick={handleLogout} > <Link to="/register">Logout</Link> </button>
                    </div> :
                        <button className='btn btn-outline btn-success'> <Link to="/login" >Login</Link> </button>

                }
            </div>
            </div>
        </nav>
    );
};

export default Header;

