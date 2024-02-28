import React, { useState } from 'react';
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import {Grid, Card, CardContent, Typography, Container, Button} from '@mui/material'
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import cake4 from '../../Assets/cake4.jpeg'
import cake5 from '../../Assets/cake5.jpeg'
import cake6 from '../../Assets/cake6.jpeg'
import cake7 from '../../Assets/cake7.jpeg'
import cake8 from '../../Assets/cake8.jpeg'
import cake9 from '../../Assets/cake9.jpeg'
import cc1 from '../../Assets/cc1.jpg'
import cc2 from '../../Assets/cc2.jpg'
import cc3 from '../../Assets/cc3.jpg'
import cookie1 from '../../Assets/cookie1.jpeg'
import cookie2 from '../../Assets/cookie2.jpeg'
import cookie3 from '../../Assets/cookie3.jpeg'
import brownie1 from '../../Assets/brownie1.jpg'
import brownie2 from '../../Assets/brownie2.jpg'
import brownie3 from '../../Assets/brownie3.jpg'

const OurProd = () => {

    const cardData = [
       
        {
          title: 'Demo cake1',
          description: 'This is the description for Card 2.',
          image: cake4,
        },
        {
          title: 'Demo cake2',
          description: 'This is the description for Card 2.',
          image: cake5,
        },
        {
          title: 'Demo cake3',
          description: 'This is the description for Card 2.',
          image: cake6,
        },
        {
          title: 'Demo cake4',
          description: 'This is the description for Card 2.',
          image: cake7,
        },
        {
          title: 'Demo cake5',
          description: 'This is the description for Card 2.',
          image: cake8,
        },
        {
          title: 'Demo cake6',
          description: 'This is the description for Card 2.',
          image: cake9,
        },
        
        // Add more card data as needed
      ];

      const cardData2 = [
        {
          title: 'Chocolate cup cake',
          description: 'The surface of the cupcake is adorned with a swirl of satiny chocolate ganache, a glossy cascade that beckons with its promise of intense, bittersweet pleasure. As your teeth sink into the first bite, the cake yields effortlessly, releasing a burst of deep chocolatey goodness that dances across your taste buds like a euphoric waltz.',
          image: cc1,
        },
        {
          title: 'Strawberry Cup Cake',
          description: 'Indulge your senses in the enchanting world of a strawberry cupcake, where every bite is a symphony of sweetness and delight. Picture a moist and tender vanilla-infused cake, its golden crumb promising a delectable experience. As you take your first heavenly bite, the delicate aroma of fresh strawberries dances upon your palate, instantly transporting you to a sun-kissed strawberry patch in full bloom.',
          image: cc2,
        },
        {
          title: 'Cocktail cup Cake',
          description: 'Embark on a delightful journey of flavors with a cocktail cupcake, where the elegance of a sophisticated libation meets the charm of a miniature dessert. Picture a delicate cupcake infused with the essence of your favorite cocktail, offering a unique and tantalizing experience for your taste buds.',
          image: cc3,
        },
       
      ]

      const cardData3 = [
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
       
      ]

      const cardData4 = [
        {
          title: 'Chocolate Brownie',
          description: 'Indulge in the sensory delight of a chocolate brownie, a decadent masterpiece that captivates from the first glance to the last blissful bite. As you set your eyes upon it, you are greeted by a rich, dark exterior that promises a symphony of chocolate flavors within.',
          image: brownie1,
        },
        {
          title: 'Peanuts Brownie',
          description: 'Step into the realm of indulgence with a peanut brownie, where the rich allure of chocolate intertwines with the nutty decadence of peanuts, creating a symphony of flavors that is nothing short of heavenly. As you gaze upon this delectable creation, you are met with a visual feast – a luscious chocolate canvas adorned with a generous sprinkling of chopped peanuts, promising a delightful crunch in every bite.',
          image: brownie2,
        },
        {
          title: 'Strawberry Brownie',
          description: 'nter a world of culinary enchantment with a strawberry brownie, a delightful fusion of rich chocolate decadence and the vibrant sweetness of sun-kissed strawberries. The visual spectacle unfolds before you as a tapestry of deep cocoa hues, interspersed with luscious red pockets of ripe strawberries, promising a symphony of flavors that beckon your senses.',
          image: brownie3,
        },
        
      ]

  const [selectedValue, setSelectedValue] = useState('option1');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '5%', // Set height to 100% of the viewport height for vertical centering
    
  };

  return (
    <>
    <Typography variant="h4" component="h2" align='center' style={{marginTop:'3%', marginBottom: '-3%'}}>
Select products
</Typography>
    <br />
<br />
<br />
    <div style={containerStyle}>
      <FormControl component="fieldset">
        <RadioGroup
          row
          aria-label="radio-group"
          name="radio-buttons-group"
          value={selectedValue}
          onChange={handleChange}
          style={{marginLeft:"27%"}}
        >
          <FormControlLabel value="option1" control={<Radio />} label="Custom Cakes" />
          <FormControlLabel value="option2" control={<Radio />} label="Cupcakes" />
          <FormControlLabel value="option3" control={<Radio />} label="Cookies" />
          <FormControlLabel value="option4" control={<Radio />} label="Brownies and Bars" />
        </RadioGroup>
        {selectedValue === 'option1' && (
            <>
             <div className="about-us-container">
            <p>Custom Cakes: Whether you're celebrating a birthday, wedding, or any special milestone, our custom cakes are sure to impress. Choose from a variety of flavors, fillings, and designs to create the perfect centerpiece for your event.</p>
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
      Product Details
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
           
           </Card>
       
             </Grid>
           ) )}

           
           </Grid>
           
         </Container>
            </>
           
        )}

{selectedValue === 'option2' && (
             <>
             <div className="about-us-container">
            <p>Indulge in our delicious cupcakes, available in a range of flavors and beautifully decorated to suit any theme or preference. Perfect for parties, gatherings, or simply as a sweet treat for yourself.</p>
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
      Product Details
       </Typography>
           <Grid container spacing={5} style={{ marginTop:"50px"}}>
          
           {cardData2.map((result, index) =>(
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
               <Button size="small">View More</Button>
             </CardActions>
           </Card>
       
             </Grid>
           ) )}

           
           </Grid>
           
         </Container>
            </>
            )}
            {selectedValue === 'option3' && (
               <>
               <div className="about-us-container">
              <p> Crisp on the outside, soft on the inside, our cookies are irresistible. From classic chocolate chip to creative flavor combinations, there's something for everyone in our cookie selection.</p>
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
        Product Details
         </Typography>
             <Grid container spacing={5} style={{ marginTop:"50px"}}>
            
             {cardData3.map((result, index) =>(
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
                 <Button size="small">View More</Button>
               </CardActions>
             </Card>
         
               </Grid>
             ) )}
  
             
             </Grid>
             
           </Container>
              </>
            )}
            {selectedValue === 'option4' && (
               <>
               <div className="about-us-container">
              <p>Rich, fudgy brownies and indulgent bars are the ultimate comfort food. Treat yourself or share with friends and family – either way, they're sure to be a hit.</p>
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
        Product Details
         </Typography>
             <Grid container spacing={5} style={{ marginTop:"50px"}}>
            
             {cardData4.map((result, index) =>(
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
                 <Button size="small">View More</Button>
               </CardActions>
             </Card>
         
               </Grid>
             ) )}
  
             
             </Grid>
             
           </Container>
              </>
            )}
      </FormControl>
    </div>
    </>
    
  );
}

export default OurProd;
