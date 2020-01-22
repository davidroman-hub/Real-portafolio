import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "./carousel.scss"

export default () => (

    <Carousel className="carousel" autoPlay>

    <div>
      <img alt="exam1" src='https://steamcdn-a.akamaihd.net/steam/apps/851850/header.jpg?t=1579215664' />
      
    </div>
    <div>
      <img  alt="exam2" src='https://cdn.mos.cms.futurecdn.net/odzFAjY2eM2ujoFztUqP39.jpeg' />
      
    </div>
    <div>
      <img  alt="exam3" src='https://images.radio-canada.ca/q_auto,w_1250/v1/ici-info/16x9/star-wars-the-mandalorian-baby-yoda.PNG' />
      
    </div>
    <div>
      <img alt="exam4" src='https://media.playstation.com/is/image/SCEA/call-of-duty-modern-warfare-hero-banner-03-ps4-us-30may19?$native_nt$' />
      
    </div>




    </Carousel>



)