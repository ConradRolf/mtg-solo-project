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
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import Button from '@mui/material/Button';
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
            <Button color='success' endIcon={<ArrowCircleLeftIcon />} onClick={handleBack} variant='contained'></Button>
            <Container fixed>
                <Typography gutterBottom variant="h5" component="div" className='searchResults'>
                    Search Results
                </Typography>
                <br />
                <br />
                <div className="carousel-container">
                    < Grid container spacing={2} >
                        {cards.map(card => (
                            <SearchItem card={card} />
                        ))
                        }
                    </Grid >
                </div>
            </Container>
        </>
    )
}

export default SearchResults





    //                      < Card >
    //                         <CardMedia
    //                             sx={{ height: 550 }}
    //                             image={cards[0].imageUrl}
    //                             title={cards[0].name}
    //                         />
    //                         <CardContent>
    //                             <Typography gutterBottom variant="h5" component="div">
    //                                 {cards[0].name}
    //                             </Typography>
    //                             <Typography varient="body3" color="text.secondary">
    //                                 {cards[0].flavor}
    //                             </Typography>
    //                         </CardContent>
    //                     </Card >