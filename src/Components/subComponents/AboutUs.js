import React from 'react';
import { Typography } from '@mui/material';

function AboutUs() {

  
  return (
    <>
     <Typography variant="h4" component="h2" align='center' style={{marginTop:'3%', marginBottom: '-3%'}}>
  About Us
</Typography>
<br />
<br />
<br />
<br />
    <div className="about-us-container">
      <p>Welcome to Le Artisan Boulangerie! At Le Artisan Boulangerie, we are passionate about creating mouthwatering treats that bring joy to every occasion. From decadent cakes to delicate pastries, each of our creations is made with love and care, using only the finest ingredients.</p>
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
    </>
    
  );
}

export default AboutUs;
