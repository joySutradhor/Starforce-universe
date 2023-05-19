import React from 'react';
import { useLoaderData } from 'react-router-dom';



const AllComics = () => {
    const comics = useLoaderData();
    const {sellerName , name, price , quantity, cetegory , _id} = comics ;
    console.log(comics)
    return (
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
                    comics.map(comic =><tbody key={comic._id}>
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
                                <button className="btn btn-outline btn-accent">Details</button>
                                </th>
                            </tr>



                        </tbody>)
                }

            </table>
        </div>
    );
};

export default AllComics;