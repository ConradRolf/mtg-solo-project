import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import DeckItem from '../DeckItem/DeckItem'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Container from '@mui/material/Container';
import Dialog from '@mui/material/Dialog';
import Alert from '@mui/material/Alert';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import './DeckList.css'


function DeckList() {

    const cards = useSelector(store => store.deckReducer);
    const history = useHistory();

    const editPage = () => {
        history.push('/edit')
    }

    const deckError = () => {
        history.push('/home')
    }

    const [open, setOpen] = useState(true);

    if (cards.length < 1) {
        return (
            <Dialog open={open}>
                <Alert severity='error' action={
                    <Button onClick={deckError} color='primary' size='small'>
                        OKAY
                    </Button>
                }>
                    Something went wrong with your deck, please try again later 🙂
                </Alert>
            </Dialog>
        )
    } else {
        return (
            <>
                <h2 className='title'> Deck: {cards[0].name} </h2>
                <h2>Current Card Count: {cards.length}</h2>
                <h2> <Button color='primary' variant='contained' onClick={editPage} startIcon={<BorderColorIcon />}>Edit Name</Button></h2>
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
}

export default DeckList