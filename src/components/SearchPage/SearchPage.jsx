import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FilledInput from '@mui/material/FilledInput';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './SearchPage.css';

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
            <div className='searchPageDiv'>
                <h3>Search for Cards here!</h3>
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={open}
                    onClick={handleClose}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>

                <Box sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    margin: '500',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingTop: '25px',
                    paddingBottom: '175px'
                }}>
                    <FormControl sx={{ m: 1 }} variant="filled">
                        <InputLabel htmlFor="card search bar">Enter Card Name Here</InputLabel>
                        <FilledInput
                            id="component-filled"
                            defaultValue="Composed TextField"
                            value={search}
                            onChange={(event) => setSearch(event.target.value)}
                            color="secondary"
                            focused
                        />
                        <Button color='success' endIcon={<SavedSearchIcon />} onClick={searchCards} variant='contained'>Search</Button>
                    </FormControl>
                </Box >
            </div>
        </>
    )
}

export default SearchPage

    // < form >
    //             <input
    //                 type='text'
    //                 required
    //                 placeholder="Enter Card Name Here"
    //                 value={search}
    //                 onChange={(event) => setSearch(event.target.value)}
    //             ></input>
    //             <button onClick={searchCards}>Search 🔎</button>
    //             </form >