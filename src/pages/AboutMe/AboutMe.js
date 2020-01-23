import  React, { Component, Fragment} from 'react';
import './AboutMe.scss'
import Carousel from "./carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";


class AboutMe extends Component{
    render(){
        return(
            <Fragment>
                <Carousel></Carousel>
            
                <div className="sec1">
                    {/* <img alt="logoP" src={logo} */}
                </div>
                <div className="sec2">
                    <h1> buenas tardes</h1>
                </div>
             






            </Fragment>
        )
    }
}

export default AboutMe