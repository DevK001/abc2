import React from 'react';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardText } from 'mdb-react-ui-kit';
import {Grid, Card, CardContent, Typography, Container, Button} from '@mui/material'
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import './Cards.css'
import cookie2 from '../../Assets/cookie2.jpeg'
import cookie1 from '../../Assets/cookie1.jpeg'
import pic4 from '../../Assets/pic4.jpeg'
import pic5 from '../../Assets/pic5.jpeg'
import pic6 from '../../Assets/pic6.jpeg'
import pic7 from '../../Assets/pic7.jpeg'
import pic8 from '../../Assets/pic8.jpeg'
import pic9 from '../../Assets/pic9.jpeg'
import pic10 from '../../Assets/pic10.jpeg'
import pic11 from '../../Assets/pic11.jpeg'

const CardList = () => {
  // Array of card data
  const cardData = [
    {
      title: 'Oat cookies', // Update title
      description: '$3', // Update description
      image: cookie1, // Assuming 'pic3' is a variable containing the image URL
    },
    {
      title: 'Granola logs',
      description: '$7',
      image: pic4,
    },
    {
      title: 'Granola Bars',
      description: '$5',
      image: pic5,
    },
    {
      title: 'Whole wheat tea cakes',
      description: '$7',
      image: pic6,
    },
    {
      title: 'Cheese Cake',
      description: '$9',
      image: pic7,
    },
    {
      title: 'Chocolate Cookies',
      description: '$6',
      image: pic8,
    },
    {
      title: 'Tiramisu',
      description: '$8',
      image: pic9,
    },
    {
      title: 'Hamper',
      description: '$12',
      image: pic10,
    },
    {
      title: 'Hamper',
      description: '$15',
      image: pic11,
    },
    // Add more card data as needed
  ];

  return (
  <Container>
   <Typography variant="h4" component="h2" align='center' style={{marginTop:'3%', marginBottom: '-3%'}}>
  Our products
</Typography>
    <Grid container spacing={5} style={{ marginTop:"50px"}}>
   
    {cardData.map((result, index) =>(
      <Grid item xs={12} sm={4} ms={4} key={index}>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 280 }}
        image={result.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {result.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: {result.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Buy Now</Button>
      </CardActions>
    </Card>

      </Grid>
    ) )}
    </Grid>
    
  </Container>
  );
};

export default CardList;
