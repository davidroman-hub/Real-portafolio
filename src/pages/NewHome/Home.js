import React,{Fragment, Component} from 'react'
import './newHome.scss'
import { Link, animateScroll as scroll } from "react-scroll";


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
                    to="nombre"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}         
                    className="botton1 btn btn-primary btn-xl js-scroll-trigger">READ MORE</Link>
            </div>
        
        </header>
     
         <main>
            <section className="container" id='nombre' >
                <hr/>
                <h2 className="h2-subtitle" id='about-us'>
               I GOT JUST WHAT YOU NEED
                </h2>
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
        </main> 
      
        <div className="github-section text-center">
          <br/>
                      <h4 className="text-center">
                        CHECK MY CODE ON GITHUB
                        </h4>
                        <p className="text-git">I have specialized mainly in MERN applications, 
                          I invite you to visit my Github portfolio to see the process of each of my Rest API's and
                           Applications I have created 
                        </p>
                     
                        <i className="git-icon fab fa-github"></i>
                        <br/>
                        <a className="git-btn btn "  href="https://github.com/davidroman-hub" target="_blank" rel="noopener noreferrer">Github</a>
                      
              </div>
     

        
        
    </Fragment>
    )
}

export default NewHome