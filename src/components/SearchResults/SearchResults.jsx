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
                    <br />
                    <br />
                    <div className="carousel-container">
                        < Grid container spacing={2} >
                            {cards.map(card  => (
                                <Grid card xs={12} sm={6} md={4} key={card.multiverseid}>
                                        <SearchItem card={card} />
                                </Grid>
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