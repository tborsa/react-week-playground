import React, { useState, useEffect } from 'react';
import Axios from 'axios';

export default function Pokedex() {
    const [search, setSearch] = useState(1);
    const [bool, setBool] = useState(true);
    const [data, setData] = useState({});

    useEffect(() => {
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${search}`)
        .then(res => {
            console.log('what is our res', res);
            setData(res.data);
        });
    }, [search]);

    return (
        <div>
            <input value={search} onChange={(e) => setSearch(e.target.value)}></input>
            <h2>{data.name}</h2>
            <img src={data.sprites && data.sprites.front_default}></img>
            <button onClick={() => setBool(!bool)}>toggle</button>
        </div>
    )
}
