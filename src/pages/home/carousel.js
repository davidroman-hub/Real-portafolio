import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "./carousel.css"

export default () => (

    <Carousel className="carousel" autoPlay>

    <div>
      <img alt="exam1" src='https://i.imgur.com/HvLoqIC.jpg' />
      
    </div>
    <div>
      <img  alt="exam2" src='https://i.imgur.com/btWouxT.jpg?1' />
      
    </div>
    <div>
      <img  alt="exam3" src='https://i.imgur.com/O4vzJbb.jpg' />
      
    </div>
    <div>
      <img alt="exam4" src='https://i.imgur.com/1Ql5eNR.jpg' />
      
    </div>




    </Carousel>



)