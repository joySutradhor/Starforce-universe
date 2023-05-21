import React from 'react';

const Blog = () => {
    return (
        <>
            <div className="card w-auto bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                    <p>An access token and a refresh token are both used in the context of authentication and authorization mechanisms, particularly in web and mobile applications. They play a vital role in securing access to protected resources or APIs and data storage Web Storage: With the help of web storage, web applications can store data locally within the users browser. During every server request data is stored in the form of cookies. </p>
                    
                </div>
            </div>
            <div className="card w-auto bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Compare SQL and NoSQL databases?</h2>
                    <p>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON</p>

                </div>
            </div>
            <div className="card w-auto bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">What is Express.js? What is NestJS?
                    </h2>
                    <p>Express is a Node.js web application framework that provides a wide range of functionality for constructing web and mobile applications. It is a layer built on top of Node that aids in the management of servers and routes. <br /> NestJS is a Node.js framework for building server-side applications. It is based on TypeScript and JavaScript. </p>

                </div>
            </div>
            <div className="card w-auto bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">What is MongoDB aggregate and how does it work ?
                    </h2>
                    <p>The aggregate method takes an array of pipeline stages as its argument. Each stage represents a specific operation or transformation that is applied sequentially to the documents in the collection. The output of one stage becomes the input for the next stage, forming a data processing pipeline.</p>

                </div>
            </div>

        </>
    );
};

export default Blog;