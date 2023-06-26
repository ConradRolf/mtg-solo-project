import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import SearchItem from '../SearchItem/SearchItem'

function SearchPage() {

    const dispatch = useDispatch()
    const [search, setSearch] = useState('')
    const cards = useSelector(store => store.searchReducer);

    const searchCards = (event) => {
        event.preventDefault();
        dispatch({ type: 'SEARCH_CARDS', payload: search })
        setSearch('');
    }

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
            <div>
                {cards.map((card, i) => (
                    <SearchItem card={card} />
                ))}
            </div>
        </>
    )
}

export default SearchPage