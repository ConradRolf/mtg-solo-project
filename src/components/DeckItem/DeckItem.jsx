import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Alert from '@mui/material/Alert';
import { useState } from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Typography from '@mui/material/Typography';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useDispatch } from 'react-redux';

function DeckItem(props) {

    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch({ type: 'DELETE_CARD', payload: props.card.id })
    }

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    let ck = (props.card.card_name)
    let ckVar = ck.replace(/ /g, '+')
    let ckLink = { link: `https://www.cardkingdom.com/catalog/search?search=header&filter%5Bname%5D=${ckVar}` }

    let edh = (props.card.card_name)
    let edhVar = edh.replace(/ /g, '-')
    let edhLower = edhVar.toLowerCase()
    let edhSend = edhLower.replace(/,/g, '')
    let edhLink = { link: `https://edhrec.com/cards/${edhSend}` }

    return (
        <>
            <Card>
                <CardMedia
                    sx={{ height: 525 }}
                    image={props.card.img}
                    title={props.card.card_name}
                />
                <a href={ckLink.link} target='_blank'>
                    <Button color='primary' >Purchase</Button>
                </a>
                <a href={edhLink.link} target='_blank'>
                    <Button color='primary' >More Info</Button>
                </a>
                <Button color='error' onClick={handleClick} endIcon={<DeleteForeverIcon />}>Delete</Button>
                <Dialog open={open} onClose={handleClick}>
                    <Alert severity='warning' action={
                        <Button onClick={handleDelete} color='error' size='small'>
                            DELETE
                        </Button>
                    }>
                        Are you sure you want to delete: {props.card.card_name}?
                    </Alert>
                </Dialog>
            </Card>
            {/* <Card className="results">
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
                        {props.card.power}/{props.card.toughness}
                    </Typography>
                    <br />
                    <Typography varient="body3" color="text.secondary">
                        {props.card.text}
                    </Typography>
                    <br />
                    <Typography varient="body3" color="text.secondary">
                        {props.card.flavor}
                    </Typography>
                </CardContent>
                <br />
                <CardActions>
                    <Button size="medium" onClick={addToDeck}>Add To Deck</Button>
                </CardActions>
            </Card> */}
        </>
    )
}


export default DeckItem