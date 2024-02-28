import React from 'react'
import {Grid, Card, CardContent, Typography, Container, Button} from '@mui/material'
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import cookie1 from '../../Assets/cookie1.jpeg'
import cookie2 from '../../Assets/cookie2.jpeg'
import cookie3 from '../../Assets/cookie3.jpeg'

function healthyLine() {
  
    const cardData = [
       
      {
        title: 'Oat cookies',
        description: 'Imagine biting into a delightful oat cookie, and let your senses take a journey through its irresistible allure. The first thing that captivates you is the aroma – a warm symphony of toasty oats, rich butter, and hints of vanilla, mingling together to create a comforting and enticing fragrance.',
        image: cookie1,
      },
      {
        title: 'Whole wheat tea cakes',
        description: 'Picture a plate adorned with golden-brown whole wheat tea cakes, each one a miniature work of art waiting to be savored. As you approach, a delightful aroma wafts through the air – a subtle combination of nutty whole wheat, warm spices, and a hint of sweetness, promising a comforting and wholesome experience.',
        image: cookie2,
      },
      {
        title: 'Granola bars',
        description: 'Envision a granola bar, a small yet exquisite creation that embodies the essence of wholesome goodness in every bite. As you unwrap it, a symphony of scents greets you – the nutty fragrance of toasted oats, the sweet notes of honey or maple syrup, and the tantalizing aroma of mixed nuts and dried fruits, all harmonizing to create an irresistible allure.',
        image: cookie3,
      },
     
      // Add more card data as needed
    ];

return (
  <>
<br />
<br />

<div className="about-us-container">
  
    <p>Indulge Without Guilt: Discover Our Wholesome Dessert Creations

At our bakery, we've redefined the concept of dessert by creating a tantalizing array of treats that not only satisfy your sweet tooth but also nourish your body. We specialise in our healthy line with products such as :

Granola Bars : that are a perfect balance of sweetness and energy, containing rolled oats, nuts and berries with a tinge of chocolate.

Whole Wheat Tea Cakes:
Tea time just got a whole lot healthier with our whole wheat tea cakes. Light, fluffy, and bursting with flavor, these cakes are made with whole wheat flour for added fiber and nutrients. We use natural sweeteners like honey and jagegry and provide a variety of options such as cranberry-orange, almond, etc. 

Oat Cookies:
Our oat cookies are a guilt-free indulgence that will leave you craving more. Made with hearty oats, whole grain flour, and a hint of sweetness from jaggery and brown sugar, these cookies are soft, chewy, and utterly irresistible. Whether you prefer classic oatmeal raisin or decadent chocolate chip, our oat cookies are sure to satisfy your sweet cravings without the guilt.

Experience Dessert Redefined:
At our bakery, we believe that dessert should be a celebration of flavor and nourishment. That's why we've crafted a lineup of treats that prove you can have your cake and eat it too – without compromising on taste or quality. Visit us today and treat yourself to desserts made the healthy way. Your taste buds and your body will thank you!</p>
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
Healthy Line products
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

export default healthyLine
