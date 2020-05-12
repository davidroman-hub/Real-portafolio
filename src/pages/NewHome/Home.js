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
                      Freelance,independent, creative , adaptative, multi-Tasking & able to achieve my goals.
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
                          {/* banner Start*/}   
                  <div className="banner-container">
                    <hr/>
                      <div className="card text-center  mr-5 ml-5 mb-5">
                        <div className="card-body">
                            <h4 className="card-title">El auténtico sabor Jarocho</h4>
                          
                            <p className="card-text">Traemos el sabor de la cocina Veracruzana a tu paladar, con las especialidades del
                              Puerto de Veracruz, como: Vuelve a la vida, Tostadas de Pulpo, Arroz a la tumbada entre otros..
                            </p>
                            <hr/>
                         
                        </div>
                      </div>
                    </div>
              
                          {/* banner finished*/}       
                          <br/>
                          <br/>
                          <hr/>
                          <h1 className=" h2-subtitle">
                       Qué es este nuevo concepto?
                        </h1>
                        <div className="About-container">
                            <div className="about-concept">
                             
                            </div>
                            <hr/>
                            <div className="about-us-des">
                              <br/>
                              <span className="capital-letter">M</span>ar y Sol<br/> 
                                no es solo una página ordinaria donde podrás ver nuestro Menu, es una plataforma entera, con la cual podrás regístrarte
                                y ordenar productos desde la comodidad de tu hogar con entrega a domicilio en un radio de 5km. Podrás hacer reservaciones Vía telefónica.
                                Te invitamos a que te registres para conocer las características de nuestra plataforma.
                                <br />
                                
                              </div>                
                        </div>
                          
                    <br/>
                    <hr/>
                    
                      <h2 className='text-center'>Ubicación</h2>
                      <p className='text-center'> Atzayacatl 79, Tlaxpana, Miguel Hidalgo, 11370 Ciudad de México, CDMX</p>
                    <div className="Map-ps">
                  
                    </div>
                    <br/>
                    <p className="text-center">Para Reservaciones Vía telefonica </p>
                    <p className="text-center">Teléfono de Contacto: 5555355280  <i class="fab fa-whatsapp"></i></p>
                    
                    <hr/>
                    {/* {JSON.stringify(productsBySell)}
                    <hr/>
                    {JSON.stringify(productsBySell)}
                    <hr/> */}
                      <h2 className="mb-4 text-center">Lo Más vendido</h2>
                       
                
              </section>
        </main>    
        <div id="header-content"/>
    </Fragment>
    )
}

export default NewHome