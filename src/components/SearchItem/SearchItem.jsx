import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useDispatch } from 'react-redux';

function SearchItem(props) {

    const dispatch = useDispatch();

    const addToDeck = () => {
        dispatch({ type: 'ADD_CARD', payload: props.card })
    }

    return (
        <>

            <Grid item xs={12} sm={6} md={4} key={props.card.id}>
                <Card className="results">
                    <CardMedia
                        sx={{ height: 550 }}
                        image={props.card.imageUrl}
                        title={props.card.name}
                    />
                </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4} key={props.card.multiverseid}>
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
                        <Typography>
                            https://www.cardkingdom.com/catalog/search?search=header&filter%5Bname%5D=Treebeard+Gracious+Host
                        </Typography>
                    </CardContent>
                    <br />
                    <CardActions>
                        <Button size="medium" onClick={addToDeck}>Add To Deck</Button>
                    </CardActions>
                </Card>
            </Grid>
        </>
    )
}

export default SearchItem

// <h4>{props.card.name}</h4>
// <img src={props.card.imageURL}/>