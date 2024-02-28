import React from 'react';
import { Typography } from '@mui/material';


function OrderAndDelivery() {
 

  return (
  <>
    <Typography variant="h4" component="h2" align='center' style={{marginTop:'3%', marginBottom: '-3%'}}>
  Ordering And Delivery Page
</Typography>
<br />
<br />
<br />
<br />
    <div className="about-us-container">
       
      <p>Ordering from le artisan boulangerie is easy! Simply browse from our social media and webite, select your favorite treats, and choose a convenient pickup or delivery option. We also offer custom orders for special events – just let us know your requirements, and we'll work with you to create something truly extraordinary.</p>
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

export default OrderAndDelivery;
