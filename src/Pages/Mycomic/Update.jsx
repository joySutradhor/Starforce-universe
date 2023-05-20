/* eslint-disable react/no-unknown-property */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Update = () => {
    const update = useLoaderData() ;
    const {_id , cetegory , name , price , quantity , ratting , sellerName , description , url , email} = update ;
    console.log(update)
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const sellerName = form.sellerName.value;
        const email = form.email.value;
        const cetegory = form.cetegory.value;
        const price = form.price.value;
        const ratting = form.ratting.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const url = form.url.value;
        console.log(url)
        const newComic = { name, sellerName, email, cetegory, price, ratting, quantity, description , url }
        fetch(`https://starforce-universe-server.vercel.app/comics/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newComic)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.modifiedCount > 0){

                    form.reset();
                    Swal.fire({
                        position: 'center ',
                        icon: 'success',
                        title: 'Update Successfully',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }

            })

    }
    return (
        <form className='mx-auto' onSubmit={handleSubmit}>
        <h2 className='text-center text-4xl font-serif font-semibold'>Update New Comic</h2>
        <p className='text-center text-xs py-3'>Please Update Only Price , ratting and Description</p>
        <div className='py-8 grid grid-cols-2 px-20 gap-5 '>
            <div className="form-control w-full">
                <label className="input-group">
                    <span>Comic Name</span>
                    <input type="text" defaultValue={name} readOnly name='name' className="input input-bordered w-full"  />
                </label>
            </div>
            <div className="form-control">
                <label className="input-group">
                    <span>Seller Name</span>
                    <input type="text" name='sellerName' readOnly defaultValue={sellerName}  className="input input-bordered  w-full "  />
                </label>
            </div>

            <div className="form-control">
                <label className="input-group">
                    <span>Email</span>
                    <input type="email"  name='email' readOnly defaultValue={email} className="input input-bordered  w-full "  />
                </label>
            </div>

            <div className="form-control">
                <label className="input-group">
                    <span>Cetegory</span>
                    <input type="text" name='cetegory' readOnly defaultValue={cetegory} placeholder='' className="input input-bordered  w-full "  />
                </label>
            </div>

            <div className="form-control">
                <label className="input-group">
                    <span>Price</span>
                    <input type="text" defaultValue={price}  name='price' className="input input-bordered  w-full "  />
                </label>
            </div>
            <div className="form-control">
                <label className="input-group">
                    <span>Ratting</span>
                    <input type="text" name='ratting' readOnly defaultValue={ratting} className="input input-bordered  w-full "  />
                </label>
            </div>
            <div className="form-control">
                <label className="input-group">
                    <span>Quantity</span>
                    <input type="text" name='quantity' defaultValue={quantity} className="input input-bordered  w-full "  />
                </label>
            </div>
            <div className="form-control">
                <label className="input-group">
                    <span>Description</span>
                    <input type="text" name='description' defaultValue={description} className="input input-bordered  w-full "  />
                </label>
            </div>
        </div>
        <div className="form-control mx-20 mb-8">
                <label className="input-group">
                    <span>Url</span>
                    <input type="text" name='url' readOnly defaultValue={url} className="input input-bordered  w-full "  />
                </label>
            </div>
        <div className='px-20 pb-10'>
            <input type="submit" value="Update" className="p-3 bg-sky-300 rounded-lg w-full  font-bold " />
        </div>
    </form>
    );
};

export default Update;