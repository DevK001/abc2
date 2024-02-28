import React from 'react'
import { Typography } from '@mui/material'

function WhyUs() {
  return (
    <>
   <Typography variant="h4" component="h2" align='center' style={{marginTop:'3%', marginBottom: '-3%'}}>
  Why Us 
</Typography>
<br />
<br />
<br />
<br />
<div className="about-us-container">
    <p>We are not just your everyday bakery but we take great pride in our cloud kitchen, made to order format. Every order is baked only after the order has been placed and delivered to you fresh out of the oven. 

We offer customised and personalised baked goodies as per your specifications to fit your occasion perfectly. 

As a home bakery, due diligence is given to hygiene of our process and all products our of top - most quality. And what more is that we are a completely eggless bakery!</p>
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
    
  )
}

export default WhyUs
