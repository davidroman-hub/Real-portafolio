import React, {Component, Fragment } from 'react'
import './home.scss'
// import Carousel from './carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import mongo from './img/mongo.png'
import react from './img/react.png'
import node from './img/node.png'
import sass from './img/sass.png'
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
                            Welcome to my Home page!<br/>
                            All the information about me it is below the page<br/>
                            You can Click on "Git Hub" for see my works
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
                          <span className="capital-letter">M</span>y name is David Roman A.  Im a developer Web and Aquaculture Engineer. 
                          I finished my Formation about Fullstack JS in november of the 2019,
                          at the Bootcamp called BEDU Tech, this Bootcamp it's located in Mexico City.
                        
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
                        Proyects
                        </h2>

                        <p> In this moment im working in differents Proyects as a Freelancer. Im working with a clothes seller in Mexico City. 
                            This proyect it's the most ambitious, it's about to made
                            an Ecommerce Aplication, im using differents program languages, in fact im doing a MERN Aplication for made this possible.
                            If you want to see my work i would like to you made a travel on my github. </p>

                        <p>Im working as well with a Professinal Contemporean Dancer in Mexico City, 
                            i made her Portafolio using React and i provide the maintenance to the Web-Page,  
                            in the future she would like to add another Features at the Web-page.
                        </p>


                        <h2 className=" h2-subtitle">
                        Why I wanted to be a Web developer ?
                        </h2>
                            I love so much the technologies for sure, but also i love the fishes!! . In my entire life i was rodeaded about alot of fishes and i worked with them as well,
                            that's why i wanted to be an Aquaculture Engineer, because i love the repoduction of them (fishes, crustaceans, oyster etc..) and the maintenance as well, but i was boring to always work for the
                            water organism , i wanted to try to be something different, all my family work for the same (Fishes), i wanted to find my path as a developer web in another coutry far from Mexico.
                            It is because of this that i started to study the path of the web developer, a new world for discover , new things new technologies, the opportunity of meet new people, and to work with them as well.
                            it's a huge new world that i want to meet and discover.  
                      
                        <h2 className=" h2-subtitle">
                        Hobbies
                        </h2>
                        <p >
                            My principal hobbie it's travel around the world, below are some photos of my travels. Right now im living in Paris France, i would like to meet another countries, first travel around europe , and after meet Asia
                            and another beautiful places. I love to play videogames , actually i participated in videogames tournaments (call of duty, apex, fortnite ,etc..), i love to do that, in fact, 
                            i have a Youtube Chanel about videogames and tournaments  and also a FaceBook fan page for the videogames. the links are on the footer. 
                        </p>

                        <p>
                            {/* <Carousel></Carousel> */}
                        </p>
                       
                            
                        <div className="info">
                        Thanks for watching! And i hope we can work together!
                        </div>



                   
                        {/* <p className="footer-nav">
                            <Footer></Footer>
                        </p> */}
                    </section>
                </main>
          
            </Fragment>
         )
    }
}

export default Home