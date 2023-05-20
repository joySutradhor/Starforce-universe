import React, { useContext, useEffect, useState } from "react";
import "./Cetegory.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Login and Register/Provider";
import Swal from "sweetalert2";

const Cetegory = () => {
    const {user } = useContext(AuthContext)
    const [activeIndex, setActiveIndex] = useState(1);
    const handleClick = (index) => setActiveIndex(index);
    const checkActive = (index, className) => activeIndex === index ? className : "";
    const [superHero, setSuperHero] = useState([]);
    useEffect(() => {

        fetch(`http://localhost:5000/superHero`)
            .then(res => res.json())
            .then(data => setSuperHero(data))
    }, [])
    const [adventure, setAdventure] = useState([]);
    useEffect(() => {

        fetch(`http://localhost:5000/Adventure`)
            .then(res => res.json())
            .then(data => setAdventure(data))
    }, [])
    const [scienceFiction, setScienceFiction] = useState([]);
    useEffect(() => {

        fetch(`http://localhost:5000/scienceFiction`)
            .then(res => res.json())
            .then(data => setScienceFiction(data))
    }, [])

    const handleAdventure = (id) => {
        console.log("none")
        if(!user){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Login First',
              })
        }
    }

    const handleSuperHero = () => {
        if(!user){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Login First',
              })
        }
    }

    const handleFiction = () => {
        if(!user){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Login First',
              })
        }
    }
    

    console.log(superHero)
    return (
        <div>
            <h1 className="text-center text-4xl font-serif font-semibold py-12" >Star Force By Cetegory</h1>
            <div className="tabs underline">
                <div className="flex mx-auto gap-10">
                    <div><button
                        className={`tab ${checkActive(1, "active")} p-0 `}
                        onClick={() => handleClick(1)}
                    >
                        Superhero
                    </button></div>
                    <div>
                        <button
                            className={`tab ${checkActive(2, "active")}`}
                            onClick={() => handleClick(2)}
                        >
                            Adventure
                        </button>
                    </div>
                    <div>
                        <button
                            className={`tab ${checkActive(3, "active")}`}
                            onClick={() => handleClick(3)}
                        >
                            Science fiction

                        </button>
                    </div>
                </div>
            </div>
            <div className="panels mx-[10%] py-5">
                <div className={`panel ${checkActive(1, "active")}`}>
                    <div className="grid md:grid-cols-2 gap-3 ">
                        {
                            superHero?.map(hero => <div key={hero._id}>

                                <div className="card gap-2 card-side bg-base-100 shadow-xl">
                                    <figure><img src={hero.url} alt="Movie" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{hero.name}</h2>
                                        <p>Price : {hero.price}  Ratting : {hero.ratting}</p>
                                        <div className="card-actions justify-end">
                                            <Link to={`details/${hero._id}`}><button  onClick={handleSuperHero} className="btn btn-primary">Details</button></Link>
                                        </div>
                                    </div>
                                </div>




                            </div>)
                        }
                    </div>
                </div>
                <div className={`panel ${checkActive(2, "active")}`}>
                <div className="grid md:grid-cols-2 gap-3 ">
                        {
                            adventure?.map(hero => <div key={hero._id}>

                                <div className="card gap-2 card-side bg-base-100 shadow-xl">
                                    <figure><img src={hero.url} className="h-[300px]" alt="Movie" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{hero.name}</h2>
                                        <p>Price : {hero.price}  Ratting : {hero.ratting}</p>
                                        <div className="card-actions justify-end">
                                            <Link to={`details/${hero._id}`}><button onClick={handleAdventure} className="btn btn-primary">Details</button></Link>
                                        </div>
                                    </div>
                                </div>




                            </div>)
                        }
                    </div>
                </div>
                <div className={`panel ${checkActive(3, "active")}`}>
                <div className="grid md:grid-cols-2 gap-3 ">
                        {
                            scienceFiction?.map(hero => <div key={hero._id}>

                                <div className="card gap-2 card-side bg-base-100 shadow-xl">
                                    <figure><img src={hero.url} alt="Movie" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{hero.name}</h2>
                                        <p>Price : {hero.price}  Ratting : {hero.ratting}</p>
                                        <div className="card-actions justify-end">
                                            <Link to={`details/${hero._id}`}><button onClick={handleFiction} className="btn btn-primary">Details</button></Link>
                                        </div>
                                    </div>
                                </div>




                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cetegory;