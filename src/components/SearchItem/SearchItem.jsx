import Card from '@mui/material/Card';
import React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import { useHistory } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

function SearchItem(props) {

    const dispatch = useDispatch();
    const history = useHistory();

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const addToDeck = () => {
        dispatch({ type: 'ADD_CARD', payload: props.card })
        setOpen(!open);
    }

    let ck = (props.card.name)
    let ckVar = ck.replace(/ /g, '+')
    let ckLink = { link: `https://www.cardkingdom.com/catalog/search?search=header&filter%5Bname%5D=${ckVar}` }

    let edh = (props.card.name)
    let edhVar = edh.replace(/ /g, '-')
    let edhLower = edhVar.toLowerCase()
    let edhSend = edhLower.replace(/,/g, '')
    let edhLink = { link: `https://edhrec.com/cards/${edhSend}` }

    return (
        <>

            <Grid item xs={12} sm={6} md={4} key={props.card.id} className='card'>
                <Card className="results">
                    <CardMedia
                        sx={{ height: 550 }}
                        image={props.card.imageUrl}
                        title={props.card.name}
                    />
                </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4} key={props.card.multiverseid} className='card'>
                <Card className="results">
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.card.name}
                        </Typography>
                        <br />
                        <Typography varient="body3" color="text.secondary">
                            Converted Mana Cost: {props.card.cmc}
                        </Typography>
                        <br />
                        <Typography varient="body3" color="text.secondary">
                            {props.card.text}
                        </Typography>
                        <br />
                        <Typography varient="body3" color="text.secondary">
                            {props.card.flavor}
                        </Typography>
                        <br />
                    </CardContent>
                    <br />
                    <CardActions>
                        <Button color='primary' onClick={addToDeck} variant='contained'>Add To Deck</Button>
                        <Dialog open={open} onClose={handleClick}>
                            <Alert severity="success">
                                Card added to deck!
                            </Alert>
                        </Dialog>
                        <a href={ckLink.link} target='_blank'>
                            <Button color='secondary' >Purchase</Button>
                        </a>
                        <a href={edhLink.link} target='_blank'>
                            <Button color='secondary' >More Info</Button>
                        </a>
                    </CardActions>
                </Card>
            </Grid>
        </>
    )
}

export default SearchItem

// <h4>{props.card.name}</h4>
// <img src={props.card.imageURL}/>