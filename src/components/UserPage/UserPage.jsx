import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import Button from '@mui/material/Button';
import Backdrop from '@mui/material/Backdrop';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import CircularProgress from '@mui/material/CircularProgress';
import './UserPage.css'

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch({ type: 'FETCH_DECK' });
  }, []);

  const goSearch = () => {
    setOpen(true);
    setTimeout(() => {
      history.push('/search');
    }, 1500);
  }

  const goDeck = () => {
    setOpen(true);
    setTimeout(() => {
      history.push('/deck');
    }, 1500);
  }

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
};

  const user = useSelector((store) => store.user);
  return (
    <>
      <div className="containerz">
        <h2>Welcome, {user.username}!</h2>
      </div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <div className='userButtonDiv'>
      <Button className='userButtons' endIcon={<SavedSearchIcon />} color='primary' onClick={goSearch} variant='contained'>Search For Cards</Button>
      <br />
      <br />
      <Button className='userButtons' endIcon={<AutoAwesomeMotionIcon />} color='primary' onClick={goDeck} variant='contained'>My Decks</Button>
      </div>
    </>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
