import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const update = useLoaderData() ;
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
        fetch(`http://localhost:5000/comics`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newComic)
        })
            .then(res => res.json())
            .then(data => {
                form.reset();
                Swal.fire({
                    position: 'top drawer ',
                    icon: 'success',
                    title: 'Added Successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })

            })

    }
    return (
        <form className='mx-auto' onSubmit={handleSubmit}>
        <h2 className='text-center text-4xl font-serif font-semibold'>Update New Comic</h2>
        <div className='py-8 grid grid-cols-2 px-20 gap-5 '>
            <div className="form-control w-full">
                <label className="input-group">
                    <span>Comic Name</span>
                    <input type="text" name='name' className="input input-bordered w-full"  />
                </label>
            </div>
            <div className="form-control">
                <label className="input-group">
                    <span>Seller Name</span>
                    <input type="text" name='sellerName'  className="input input-bordered  w-full "  />
                </label>
            </div>

            <div className="form-control">
                <label className="input-group">
                    <span>Email</span>
                    <input type="email"  name='email' className="input input-bordered  w-full "  />
                </label>
            </div>

            <div className="form-control">
                <label className="input-group">
                    <span>Cetegory</span>
                    <input type="text" name='cetegory' placeholder='Make sure write marvel , star wars or avengers' className="input input-bordered  w-full "  />
                </label>
            </div>

            <div className="form-control">
                <label className="input-group">
                    <span>Price</span>
                    <input type="text"   name='price' className="input input-bordered  w-full "  />
                </label>
            </div>
            <div className="form-control">
                <label className="input-group">
                    <span>Ratting</span>
                    <input type="text" name='ratting' className="input input-bordered  w-full "  />
                </label>
            </div>
            <div className="form-control">
                <label className="input-group">
                    <span>Quantity</span>
                    <input type="text" name='quantity' className="input input-bordered  w-full "  />
                </label>
            </div>
            <div className="form-control">
                <label className="input-group">
                    <span>Description</span>
                    <input type="text" name='description' className="input input-bordered  w-full "  />
                </label>
            </div>
        </div>
        <div className="form-control mx-20 mb-8">
                <label className="input-group">
                    <span>Url</span>
                    <input type="text" name='url' className="input input-bordered  w-full "  />
                </label>
            </div>
        <div className='px-20 pb-10'>
            <input type="submit" value="Update" className="p-3 bg-sky-300 rounded-lg w-full  font-bold " />
        </div>
    </form>
    );
};

export default Update;