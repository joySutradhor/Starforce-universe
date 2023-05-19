/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Login and Register/Provider';

const MyComic = () => {
    const {user} = useContext(AuthContext) ;
    const [comic , setComic] = useState([]) ;
    const url = `http://localhost:5000/myComics?email=${user.email}` ;
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setComic(data))
    } , [])
    return (
        <div>
            <h1>my Comic{comic.length}</h1>
        </div>
    );
};

export default MyComic;