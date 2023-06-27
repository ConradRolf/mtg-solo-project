import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

function SearchPage() {

    const dispatch = useDispatch()
    const history = useHistory()
    const [search, setSearch] = useState('')

    // useEffect(() => {
    //     dispatch({ type: 'SEARCH_CARDS', payload: 'Black Lotus' });
    // }, []);

    const searchCards = (event) => {
        event.preventDefault();
        dispatch({ type: 'SEARCH_CARDS', payload: search })
        setOpen(true);
        setSearch('');
        setTimeout(() => {
            history.push('/results');
        }, 1500);
    }

    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };

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
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={open}
                    onClick={handleClose}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
            </form>
        </>
    )
}

export default SearchPage