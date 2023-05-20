import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';



const AllComics = () => {
    const comics = useLoaderData();


    return (
        <div>
            <form className='flex justify-end  items-center mx-5 py-2 gap-5'> <input type="text" placeholder="Ensure comic name is matched" name='search' className="input input-bordered input-accent w-full max-w-xs" />
                <div>
                    <button className="btn btn-outline btn-accent">Search</button>
                </div>

            </form>
            <div className="overflow-x-auto w-full px-10">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Seller Name</th>
                            <th>Comic Name</th>
                            <th>category Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Show Details</th>
                        </tr>
                    </thead>

                    {
                        comics.map(comic => <tbody key={comic._id}>
                            <tr>
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
                                    <Link to={`/details/${comic._id}`}><button className="btn btn-outline btn-accent">Details</button></Link>
                                </th>
                            </tr>



                        </tbody>)
                    }

                </table>
            </div>
        </div>
    );
};

export default AllComics;