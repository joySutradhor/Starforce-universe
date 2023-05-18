import React, { useContext } from 'react';
import { AuthContext } from '../../Login and Register/Provider';

const AddComic = () => {

    const {user} = useContext(AuthContext)
    console.log(user)


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
        const url = form.url.value ;
        const newComic = { name, sellerName, email, cetegory, price, ratting, quantity, description , url }
        console.log(name, sellerName, email, cetegory, price, ratting, quantity, description , url)
    }
    return (
        <form className='mx-auto' onSubmit={handleSubmit}>
            <h2 className='text-center text-4xl font-serif font-semibold'>Add New Comic</h2>
            <div className='py-8 grid grid-cols-2 px-20 gap-5 '>
                <div className="form-control w-full">
                    <label className="input-group">
                        <span>Comic Name</span>
                        <input type="text" name='name' className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="input-group">
                        <span>Seller Name</span>
                        <input type="text" name='sellerName' defaultValue={user?.displayName} className="input input-bordered  w-full" />
                    </label>
                </div>

                <div className="form-control">
                    <label className="input-group">
                        <span>Email</span>
                        <input type="email" defaultValue={user?.email} name='email' className="input input-bordered  w-full" />
                    </label>
                </div>

                <div className="form-control">
                    <label className="input-group">
                        <span>Cetegory</span>
                        <input type="text" name='cetegory' className="input input-bordered  w-full" />
                    </label>
                </div>

                <div className="form-control">
                    <label className="input-group">
                        <span>Price</span>
                        <input type="number" name='price' className="input input-bordered  w-full" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="input-group">
                        <span>Ratting</span>
                        <input type="text" name='ratting' className="input input-bordered  w-full" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="input-group">
                        <span>Quantity</span>
                        <input type="number" name='quantity' className="input input-bordered  w-full" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="input-group">
                        <span>Description</span>
                        <input type="text" name='description' className="input input-bordered  w-full" />
                    </label>
                </div>
            </div>
                <div className="form-control px-20 pb-10">
                    <label className="input-group">
                        <span>Photo Url</span>
                        <input type="text" name='url' className="input input-bordered  w-full" />
                    </label>
                </div>
            <div className='px-20 pb-10'>
                <input type="submit" value="Submit" className="p-3 bg-sky-300 rounded-lg w-full  font-bold " />
            </div>
        </form>
    );
};

export default AddComic;