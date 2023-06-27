import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function SearchItem(props) {

    return (
        <>
            <Card className="results">
                <CardMedia
                    sx={{ height: 550 }}
                    image={props.card.imageUrl}
                    title={props.card.name}
                />
            </Card>
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
            </Card>
        </>
    )
}

export default SearchItem

// <h4>{props.card.name}</h4>
// <img src={props.card.imageURL}/>