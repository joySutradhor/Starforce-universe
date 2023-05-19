import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const details = useLoaderData();
    const { cetegory ,sellerName ,  description , email , quantity , price , url , name , ratting } = details;
    console.log(details)
    return (
        <div className="card lg:card-side bg-base-100 mx-[10%] py-12 shadow-sm">
            <div>
            <figure><img src={url} alt="Album" className='rounded-md h-[400px] w-[400px]'/></figure>
            </div>
            <div className="card-body">
                <h2 className="card-title">{cetegory}</h2>
                <div className='text-gray-500'>
                <p>Seller : {sellerName}</p>
                <p>Comic Name : {name}</p>
                <p>Price : {price}</p>
                <p>Quantity : {quantity}</p>
                <p>Email : {email}</p>
                <p>Description : {description}</p>
                <p>Ratting : {ratting}</p>
                </div>
            </div>
        </div>
    );
};

export default Details; 