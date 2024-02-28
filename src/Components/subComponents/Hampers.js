import React from 'react'
import {Grid, Card, CardContent, Typography, Container, Button} from '@mui/material'
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import pic3 from '../../Assets/pic3.jpg'
import pic4 from '../../Assets/pic4.jpeg'
import pic5 from '../../Assets/pic5.jpeg'
import pic6 from '../../Assets/pic6.jpeg'
import pic7 from '../../Assets/pic7.jpeg'
import pic8 from '../../Assets/pic8.jpeg'
import pic9 from '../../Assets/pic9.jpeg'
import pic10 from '../../Assets/pic10.jpeg'
import pic11 from '../../Assets/pic11.jpeg'


function Hampers() {
    const cardData = [
        {
          title: 'Demo 1',
          description: 'This is the description for Card 2.',
          image: pic9,
        },
        {
          title: 'Demo 2',
          description: 'This is the description for Card 2.',
          image: pic10,
        },
        {
          title: 'Demo 3',
          description: 'This is the description for Card 2.',
          image: pic11,
        },
        // Add more card data as needed
      ];
    
  return (
    <>
    <br />
<br />
<br />

     <div className="about-us-container">
     
      <p>Indulge in the joy of the festivities with our exquisite festive hampers, meticulously curated to delight and enchant. Each hamper is a treasure trove of artisanal delights to spread warmth and cheer. From chocolates, cookies, teacakes and brownies to florentines, jars and granola; our hampers offer a burst of flavors and textures sure to enchant all your loved ones. Whether it is for your family or for your corporate relations, our festive hampers are the perfect way to elevate any occasion and create lasting memories.</p>
      <style jsx>{`
        .about-us-container {
          background-color: #f8f8f8;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          text-align: center;
          max-width: 600px;
          margin: 0 auto;
        }

        p {
          font-size: 18px;
          line-height: 1.6;
          color: #333;
        }
      `}</style>
    </div>
    <Container>
   <Typography variant="h4" component="h2" align='center' style={{marginTop:'3%', marginBottom: '-3%'}}>
  Hamper products
</Typography>
    <Grid container spacing={5} style={{ marginTop:"50px"}}>
   
    {cardData.map((result, index) =>(
      <Grid item xs={12} sm={4} ms={4} key={index}>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 260 }}
        image={result.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {result.title}
        </Typography>
       
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

      </Grid>
    ) )}
    </Grid>
    
  </Container>
    </>
   
  )
}

export default Hampers
