import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function SearchPage() {

    const dispatch = useDispatch()
    const history = useHistory()
    const [search, setSearch] = useState('')

    useEffect(() => {
        dispatch({ type: 'SEARCH_CARDS', payload: 'Black Lotus' });
    }, []);

    const searchCards = (event) => {
        event.preventDefault();
        dispatch({ type: 'SEARCH_CARDS', payload: search })
        setSearch('');
        history.push('/results')
    }
    // Object.values()
    return (
        <>
            <h3>Search for Cards here!</h3>
            <form>
                <input
                    type='text'
                    required
                    placeholder="Enter Card Name Here"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                ></input>
                <button onClick={searchCards}>Search 🔎</button>
            </form>
        </>
    )
}

export default SearchPage