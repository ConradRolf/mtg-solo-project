import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div className='info'>
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Challenges in development:
              <br />
              -Issues with the data not being sent the correct way to be added into the database
            </Typography>
            <br />
            <Typography gutterBottom variant="h5" component="div">
              Goals for future development:
              <br />
              -I would like to develop an in-game life counter that people would be able to use while they play magic with their friends
              <br />
              -I would also like to develop the ability to be able to export deck lists to other websites for players to be able to move their created decks with ease
            </Typography>
            <br />
            <Typography gutterBottom variant="h5" component="div">
              Props:
              <br />
              props.instructor.Liz
              <br />
              props.instructor.Dane
              <br />
              props.cohort.Diamond
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default AboutPage;
