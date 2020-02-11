import React, {Component, Fragment } from 'react'
import './home.scss'
// import Carousel from './carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import mongo from './img/mongo.png'
import react from './img/react.png'
import node from './img/node.png'
import sass from './img/sass.png'
import ajolotl from './img/ajolotl.png'
import gaming from './img/video.png'
import exercice from './img/exercice.png'
import travel from './img/travel.png'
import congas from './img/congas.png'
import tecnologic from './img/tecno.png'
//import Footer from '../ContactMe/Footer/Footer'


window.addEventListener('scroll', () => {
  const header = document.getElementById('header-content');
    header.style.opacity = '1'- window.pageYOffset / 650;})



class Home extends Component{
    render(){
        return(
            <Fragment>
                <header className="header-content" id="header-content">
                    <div className="header-text">
                        <p className ="icon">
                            <i class="fas fa-gamepad"></i>
                        </p>
                        <h1 className="title">
                            David Roman
                            <br/>  <br/>       
                        <span className="orange-neon-title regular-text">Web developper</span>
                        </h1>
                        <p className="description">
                            Welcome to my Home!<br/>
                            All my info can be found scrolling down.<br/>
                            You can Click on "Git Hub" to see all my work!
                        </p>
                        <a href="https://github.com/davidroman-hub" target="_blank" rel="noopener noreferrer" className="btn-link regular-text">Git Hub</a>

                    </div>
                </header>
                 <main>
                    <section className="container">
                        <h2 className=" h2-subtitle">
                        About Me
                        </h2>
                        <p>
                          <span className="capital-letter">M</span>y name is David Roman Aguirre<br/> - I'm a web developer and Aquaculture Engineer. <br/>
                          - I completed my JS Fullstack program from BEDU Tech (Mexico City) in November 2019.
                        
                        </p>
                        <div className="Skills-icon">
                        <div className=" info2">
                        Skills
                        </div>
                        <p className='React'>
                            
                        <img alt='react' src={react}/>
                        </p>
                        <p className='Node'>
                        <img alt='node' src={node}/>
                        </p>
                        <p className="Mongo">
                          <img alt='mongo' src={mongo}/>
                        </p>
                        <p className='Sass'>
                        <img alt='sass' src={sass}/>
                        </p>

                        </div>


                        <h2 className=" h2-subtitle">
                        Projects
                        </h2>

                        <p> At this moment i'm engaged in multiple Projects as a Freelancer. 


                           Some of my work includes creating Ecommerce applications, utilizing MERN App, 
                           for a clothes retailer in mexico city.
                            </p>

                        <p>Also, i'm working as well with a professinal Contemporary dancer instructor from Mexico City, 
                            in order to provide a portfolio for her. I'm using React and currently maintain the web-page. 
                            
                        </p>


                        <h2 className=" h2-subtitle">
                        Why I wanted to be a Web developer ?
                        </h2>
                            I wanted to try to be something different, i wanted to find my path as a web developer in another coutry far from Mexico.
                            It's because of this that i started to study the path of the web developer, a new world to discover , new things, new technologies, 
                            the opportunity to meet new people, and to work with them as well.
                          
                      
             


                   
                        {/* <p className="footer-nav">
                            <Footer></Footer>
                        </p> */}
                    </section>
                    
                    <h2 className=" h2-subtitle">
                        Interests
                        </h2>
                        {/* <p >
                            My principal hobbie it's travel around the world, below are some photos of my travels. Right now im living in Paris France, i would like to meet another countries, first travel around europe , and after meet Asia
                            and another beautiful places. I love to play videogames , actually i participated in videogames tournaments (call of duty, apex, fortnite ,etc..), i love to do that, in fact, 
                            i have a Youtube Chanel about videogames and tournaments  and also a FaceBook fan page for the videogames. the links are on the footer. 
                        </p> */}

                    <div className="Hobbies-icon">

                
                    <p className='H-icons'>
                            <img alt='star' src={exercice}/>
                        </p>    

                        <p className='H-icons'>
                            <img alt='star' src={travel}/>
                        </p>
                        <p className='H-icons'>
                            <img alt='star' src={gaming}/>
                        </p>
                        <p className='H-icons'>
                            <img alt='star' src={ajolotl}/>
                        </p>
                        <p className='H-icons'>
                            <img alt='star' src={congas}/>
                        </p>
                         <p className='H-icons'>
                            <img alt='star' src={tecnologic}/>
                        </p> 
                        

                    </div>

                        <p>
                            {/* <Carousel></Carousel> */}
                        </p>
                       
                            
                        <div className="info">
                        Thanks for reading! And i hope we can work together!
                        </div>




                </main>
          
            </Fragment>
         )
    }
}

export default Home