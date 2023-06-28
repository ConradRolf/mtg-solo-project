import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import DeckItem from '../DeckItem/DeckItem'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Card } from '@mui/material';
import CardContent from '@mui/material';


function DeckList() {

    const cards = useSelector(store => store.deckReducer);

    return (
        <>
            <h2>{cards[0].name}</h2>
            <Container fixed>
                <div className="carousel-container">
                    < Grid container spacing={2} >
                        {cards.map(card => (
                            <Grid item xs={12} sm={6} md={4} key={card.card_id}>
                                <DeckItem card={card} />
                            </Grid>
                        ))
                        }
                    </Grid >
                </div>
            </Container>
        </>
    )
}

export default DeckList