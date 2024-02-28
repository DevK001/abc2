import React from 'react';
import styled from 'styled-components';
import { Typography } from '@mui/material';

const ContactUsContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  p {
    font-size: 16px;
    line-height: 1.5;
    color: #333;
  }

  a {
    color: #007bff;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;

function ContectUs() {
  return (
    <>
     <Typography variant="h4" component="h2" align='center' style={{marginTop:'3%', marginBottom: '-3%'}}>
  Contact Us
</Typography>
<br />
<br />
<br />
<br />
    <ContactUsContainer>
      <p>
        Have a question or special request? We'd love to hear from you! Contact us via phone or email, or stop by our bakery to say hello. Follow us on social media for the latest updates, promotions, and behind-the-scenes glimpses into our kitchen.
      </p>
      <p>
      Instagram handle-LeArtisanBoulangerie_03
      </p>
      <p>
      Contact number: +919934543345
      </p>
      <p>
      Email: handle-LeArtisanBoulangerie03@gmail.com
      </p>
      <p>
        Thank you for choosing Le Artisan Boulangerie – Baking the world a better place!
      </p>
    </ContactUsContainer>
    </>
    
  );
}

export default ContectUs;
