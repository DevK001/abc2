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

function ExoticLine() {

    const cardData = [
       
        {
          title: 'Granola logs',
          description: 'The granola log invites you with a mosaic of colors and textures. Its surface, adorned with a golden-brown hue, is a testament to the toasty crunchiness of the oats, nuts, and seeds that make up its base. Each log is studded with an array of dried fruits – chewy raisins, apricots, or cranberries – adding vibrant bursts of natural sweetness and a tapestry of colors that entices the eyes.',
          image: pic4,
        },
       
        {
          title: 'CheeseCake',
          description: 'Indulge in the decadent allure of a classic cheesecake, an exquisite dessert that transcends the ordinary with its velvety texture and rich, creamy flavor. At first glance, the cheesecake is a masterpiece of culinary art – a smooth, flawless surface, delicately golden at the edges, beckoning you to savor its heavenly decadence.',
          image: pic7,
        },
        {
          title: 'Cookies',
          description: 'Transport yourself to a realm of irresistible delight with the allure of chocolate cookies. Each cookie is a small, round masterpiece, a golden-brown disc adorned with a mesmerizing crackled surface that promises a symphony of textures and flavors. The aroma is an enchanting blend of rich cocoa, warm butter, and a hint of vanilla, a fragrant invitation to indulge.',
          image: pic8,
        },
       
        // Add more card data as needed
      ];

  return (
    <>
    <br />
    <br />
<div className="about-us-container">
      <p>We pride ourselves on our exotic line of products, meticulously crafted to transport your taste buds to far-off lands and tantalize your senses with every bite. Indulge in the delicate sweetness of our Florentines, a symphony of caramelized almonds, candied fruits, and rich chocolate. 

For a wholesome treat, order our Granola Logs, packed with hearty oats, nuts, and dried fruits, drizzled with honey for the perfect balance of crunch and sweetness. 

Our Tiramisu will transport you to the streets of Italy with its layers of delicate sponge cake soaked in espresso, creamy mascarpone cheese, and a dusting of cocoa. 

And last but not least, our Cheesecakes are velvety-smooth delights bursting with flavor, with options from classic New York style to exotic fruit-infused varieties. 

Discover a world of flavor and passion in every bite with our exotic line of bakery delights.</p>
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
  Exotic Line products
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
         {result.description}
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

export default ExoticLine
