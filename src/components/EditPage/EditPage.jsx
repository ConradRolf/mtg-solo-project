import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

function EditPage() {

    const dispatch = useDispatch();

    const putChange = (event) => {
        console.log('deck name on edit page', deckName)
        event.preventDefault();
        dispatch({ type: 'PUT_CHANGE', payload: { deckName } });
        dispatch({ type: 'FETCH_DECK' });
        setOpen(true);
        setDeckName('');
        setTimeout(() => {
            history.push('/results');
        }, 1500);
    }

    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };

    const [deckName, setDeckName] = useState('');

    return (
        <>
            <form>
                <input
                    type='text'
                    placeholder="Enter Deck Name Here"
                    value={deckName}
                    onChange={(event) => setDeckName(event.target.value)}
                ></input>
                <button onClick={putChange}>Submit</button>
            </form>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
                onClick={handleClose}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </>
    )
}

export default EditPage