import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './LandingPage.css';

function SearchPage() {

    const dispatch = useDispatch()
    const [search, setSearch] = useState([])

    const searchCards = () => {
        dispatch({ type: 'SEARCH_CARDS', payload: search })
    }

    return (
        <>
            <h3>Search for Cards here!</h3>
            <form>
            <input 
            placeholder="Enter Card Name Here"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            ></input>
            <button onSubmit={searchCards}>Search 🔎</button>
            </form>
        </>
    )
}

export default SearchPage