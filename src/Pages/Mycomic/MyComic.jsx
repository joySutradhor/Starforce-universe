/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Login and Register/Provider';
import { Link } from 'react-router-dom';

const MyComic = () => {
    const { user } = useContext(AuthContext);
    const [comics, setComic] = useState([]);
    const url = `http://localhost:5000/myComics?email=${user.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setComic(data))
    }, [])
    return (
        <div className='py-10'>
            <div className="overflow-x-auto w-full px-10">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Delete</th>
                            <th>Seller Name</th>
                            <th>Comic Name</th>
                            <th>category Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Update Now</th>
                        </tr>
                    </thead>

                    {
                        comics.map(comic => <tbody key={comic._id}>
                            <tr>
                                <th>
                                    <button className="btn btn-circle btn-outline">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div>
                                            <div className="font-bold">{comic.sellerName}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>{comic.name}</td>
                                <td>{comic.cetegory}</td>
                                <td>{comic.price}</td>
                                <td>{comic.quantity}</td>
                                <th>
                                    <Link to={`/details/${comic._id}`}><button className="btn btn-outline btn-accent">Update</button></Link>
                                </th>
                            </tr>



                        </tbody>)
                    }

                </table>
            </div>
        </div>
    );
};

export default MyComic;