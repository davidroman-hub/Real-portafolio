import React,{Fragment, Component} from 'react'
import './newHome.scss'
import { Link, animateScroll as scroll } from "react-scroll";
// images skills
import mongo from './images/mongo.png'
import next from './images/next.png'
import boots from './images/boots.png'

// images Protfolio
import marysol from './images/marysol.PNG'
import roger from './images/roger.PNG'
import auth from './images/auth.PNG'
import abi from './images/abi.PNG'
import ecom from './images/ecommerce.PNG'



const NewHome  = () => { 
    return (
        <Fragment>
         
        <header className="header-content "  id="header-content">
            <div className="header-text">   
                 <p className='Logo1'>      
              </p>
                    <h4 className="arrow">
                        Developing &  Web Design
                    </h4>
                        <hr/>
                    <div className="figure"/>    
                    <h6 className="arrow-2"> We can build awesome things together</h6>    
                    <br/>
                    <Link 
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}         
                    className="botton1 btn btn-primary btn-xl js-scroll-trigger">READ MORE</Link>
            </div>
        
        </header>
     
         <div>
            <section className="container" id='about' >
              <br/>
                <h2 className="h2-subtitle" id='about-us'>
               I GOT JUST WHAT YOU NEED
                </h2>
           <hr/>
                <div className="About-container">
                    <div className="about-us text-center">
                    Fullstack JS, Frontend & Backend Developer,
                    Acuaculture Engineer & Web Designer. 
                    </div>
                    <hr/>
                    
                </div>
                <p className='text-after'>
                      Freelance, independent, creative , adaptative, multi-Tasking & able to achieve my goals.
                      <br/>
                      Detail & love to work as a Team.
                    </p>
                <br/>
                <div className='arrow-2 text-center'>
                <Link 
                    to="nombre"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}         
                    className="botton btn btn-xl">WHAT I DO?</Link>
               </div>
                <hr/>          
              </section>
        </div> 
      
        <div className="github-section text-center">
          <br/>
                      <h4 className="text-center">
                        CHECK MY CODE ON GITHUB
                        </h4>
                        <div className="figure"/>  
                        <p className="text-git">I have specialized mainly in MERN applications, 
                          I invite you to visit my Github portfolio to see the process of each of my Rest API's and
                           Applications I have created 
                        </p>
                     
                        <i className="git-icon fab fa-github"></i>
                        <br/>
                        <a className="git-btn btn mb-4 "  href="https://github.com/davidroman-hub" target="_blank" rel="noopener noreferrer">Github</a>
                    
              </div>
        <div className="services" id='skills'>
                <br/>
                <h4 className='text-center mb-4'>FRAMEWORKS AND PLATFORMS SKILLS</h4> 
                <div className='figure2'/>
                <div className="Hobbies-icon">
                    <p className='H-icons'>
                      <i className="frame fab fa-react"></i>
                        <h5 className="text-center">React</h5>
                    </p>
                    <p className='H-icons'>
                      <i className="frame fab fa-node-js"></i>
                      <h5 className="text-center">Node JS</h5>
                    </p>
                   
                    <p className='H-icons'>
                      <i className="frame fab fa-digital-ocean ml-4"></i>
                      <h5 className="text-center">Digital Ocean</h5>
                    </p>
                    <p className='H-icons '>
                      <i className="frame fab fa-aws"></i>
                      <h5 className="text-center">Amazon Web S.</h5>
                    </p> 
                    <p className='H-icons'>
                      <i className="frame fab fa-sass"></i>
                      <h5 className="text-center">Sass</h5>
                    </p>
                    <br/>
                     <p className='mongo '>
                      <img src={mongo} alt='/' />
                      <h5 className="text-center">Mongo DB</h5>
                    </p>
                    <p className='mongo '>
                      <img src={next} alt='/' />
                      <h5 className="text-center">Next JS</h5>
                    </p> 
                    <p className='mongo '>
                    <img src={boots} alt='/' className="text-center"/>
                      <h5 className="text-center">Bootstrap 4</h5>
                    </p>
                </div>
        </div> 

     <div className="Hobbies-icon">       
        <div className='container-card'>
           <div className="card">
              <img src={marysol}/>
                      <h4>Naturaleza</h4>
                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, excepturi unde?</p>
                        <a href="#">Leer más</a>
            </div>
        </div>
        
        <div className='container-card'>
           <div className="card">
              <img src={roger}/>
                      <h4>Naturaleza</h4>
                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, excepturi unde?</p>
                        <a href="#">Leer más</a>
            </div>
        </div>
        
        <div className='container-card'>
           <div className="card">
              <img src={auth}/>
                      <h4>Naturaleza</h4>
                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, excepturi unde?</p>
                        <a href="#">Leer más</a>
            </div>
        </div>
        <div className='container-card'>
           <div className="card">
              <img src={ecom}/>
                      <h4>Naturaleza</h4>
                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, excepturi unde?</p>
                        <a href="#">Leer más</a>
            </div>
        </div>
        <div className='container-card'>
           <div className="card">
              <img src={abi}/>
                      <h4>Naturaleza</h4>
                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, excepturi unde?</p>
                        <a href="#">Leer más</a>
            </div>
        </div>
        <div className='container-card'>
           <div className="card">
              <img src={auth}/>
                      <h4>Naturaleza</h4>
                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, excepturi unde?</p>
                        <a href="#">Leer más</a>
            </div>
        </div>
        </div>
              
     

        
        
    </Fragment>
    )
}

export default NewHome