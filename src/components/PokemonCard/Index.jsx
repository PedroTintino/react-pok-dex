import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';

export default function PokemonCard( {name, image, types} ) {
const typeHandler = () => {
  if (types[1]){
    return types[0].type.name + ' | ' + types[1].type.name;
  } else{
    return types[0].type.name;
  }
}

const firstLetter = () =>{
  return name[0].toUpperCase() + name.substring(1);
}

  return (
    <Card sx={{ maxWidth: 250, cursor: 'pointer' }}>
      <CardActionArea>
      <CardMedia
        sx={{ height: 250 }}
        image={image}
      />
      <CardContent>
        <Box display="flex" justifyContent='space-between' width='100%' alignItems='center'>
        <Typography gutterBottom variant="h6" component="div" fontWeight='bold' >
          {firstLetter()}
        </Typography>
        <Typography gutterBottom variant="captionText" component="div">
          {typeHandler()}
        </Typography>
        </Box>
        {/* <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
      </CardActionArea>
    </Card>
  );
}
