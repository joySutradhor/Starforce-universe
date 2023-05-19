import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';



const AllComics = () => {
    const comics = useLoaderData();
    const [comic , setComic] = useState([]);
    const handleSearch = (event) => {
        event.preventDefault()
        const form = event.target ;
        const search = form.search.value;
        console.log(search)
        console.log(comics)
        comics.filter(data => {
            const newData = data.price > 70 ;
            console.log(newData)
        })
        
        
        
    }
    console.log(comic)
    return (
        <div>
            <form onSubmit={handleSearch} className='flex justify-end  items-center mx-5 py-2 gap-5'> <input type="text" placeholder="Ensure comic name is matched" name='search' className="input input-bordered input-accent w-full max-w-xs" />
                <div>
                    <button className="btn btn-outline btn-accent">Search</button>
                </div>

            </form>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>

                            </th>
                            <th>Seller Name</th>
                            <th>Comic Name</th>
                            <th>category Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th></th>
                        </tr>
                    </thead>

                    {
                        comics.map(comic => <tbody key={comic._id}>
                            <tr>
                                <th>
                                    <button className="btn btn-circle btn-outline">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
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