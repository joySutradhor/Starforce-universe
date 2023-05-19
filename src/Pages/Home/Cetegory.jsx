import React, { useState } from "react";
import "./Cetegory.css";

const Cetegory = () => {
    const [activeIndex, setActiveIndex] = useState(1);
    const handleClick = (index) => setActiveIndex(index);
    const checkActive = (index, className) => activeIndex === index ? className : "";
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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean erat ligula, feugiat at felis vitae, porttitor lacinia quam.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean erat ligula, feugiat at felis vitae, porttitor lacinia quam.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean erat ligula, feugiat at felis vitae, porttitor lacinia quam.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean erat ligula, feugiat at felis vitae, porttitor lacinia quam.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean erat ligula, feugiat at felis vitae, porttitor lacinia quam.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean erat ligula, feugiat at felis vitae, porttitor lacinia quam.</p>
                </div>
                <div className={`panel ${checkActive(2, "active")}`}>
                    <p>Nulla lobortis quis massa quis lobortis. Nullam porta semper lorem, vel efficitur augue rutrum quis. Suspendisse potenti.</p>
                </div>
                <div className={`panel ${checkActive(3, "active")}`}>
                    <p>Cras porta consectetur dolor porttitor fringilla. Cras vitae urna ac erat fermentum egestas. Donec egestas cursus scelerisque.</p>
                </div>
            </div>
        </div>
    );
};

export default Cetegory;