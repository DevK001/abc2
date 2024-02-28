import React from 'react';
import {MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';
import cheeseCakes from '../../Assets/cheeseCakes.jpg'
import pic2 from '../../Assets/pic2.jpg'
import pic3 from '../../Assets/pic3.jpg'
import pic4 from '../../Assets/pic4.jpeg'

export default function App() {
  return (
    <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem itemId={1}>
        <img src={cheeseCakes} className='d-block w-100' alt='...' style={{height:'500px'}}/>
        <MDBCarouselCaption>
         
        
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={2}>
        <img src={pic4} className='d-block w-100' alt='...' style={{height:'500px'}}/>
        <MDBCarouselCaption>
        
         
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={3}>
        <img src={pic3} className='d-block w-100' alt='...' style={{height:'500px'}} />
        <MDBCarouselCaption>
         
          
        </MDBCarouselCaption>
      </MDBCarouselItem>
    </MDBCarousel>
  );
}