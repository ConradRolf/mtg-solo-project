import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import SearchItem from '../SearchItem/SearchItem'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Carousel from 'react-material-ui-carousel';
import './SearchResults.css'


function SearchResults() {

    const history = useHistory();
    const cards = useSelector(store => store.searchReducer.cards);
    console.log('data type of cards here >>>>>>>>>', cards)

    const handleBack = () => {
        history.push('/search')
    }

    return (
        <>
            <button onClick={handleBack}>Back to Search</button>
            <Container fixed>
                <Typography gutterBottom variant="h5" component="div">
                    Search Results
                </Typography>
                <div className="carousel-container">
                    <Grid>
                        {cards.map((card, i) => (
                            <div key={i}>
                                <SearchItem card={card} />
                            </div>
                        ))}
                    </Grid>
                </div>
            </Container>
        </>
    )
}

export default SearchResults