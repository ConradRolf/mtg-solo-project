import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function EditPage() {

    const dispatch = useDispatch();
    const history = useHistory();

    const putChange = (event) => {
        console.log('deck name on edit page', deckName)
        event.preventDefault();
        dispatch({ type: 'PUT_CHANGE', payload: { deckName } });
        dispatch({ type: 'FETCH_DECK' });
        setOpen(true);
        setDeckName('');
        setTimeout(() => {
            history.push('/deck');
        }, 1500);
    }

    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };

    const [deckName, setDeckName] = useState('');

    return (
        <div>
            <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                margin: '500',
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: '175px',
                paddingBottom: '175px'
            }}>
                <FormControl sx={{ m: 1 }}>
                    <InputLabel htmlFor="outlined-adornment-amount">Deck Name</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        // startAdornment={<InputAdornment position="start"></InputAdornment>}
                        label="Deck Name"
                        value={deckName}
                        onChange={(event) => setDeckName(event.target.value)}
                    />
                    <Button variant='contained' color='primary' onClick={putChange}>Submit</Button>
                </FormControl>
            </Box >
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
                onClick={handleClose}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    )
}

export default EditPage

{/* <form>
                <input
                    type='text'
                    placeholder="Enter Deck Name Here"
                    value={deckName}
                    onChange={(event) => setDeckName(event.target.value)}
                ></input>
                <button onClick={putChange}>Submit</button>
            </form> */}