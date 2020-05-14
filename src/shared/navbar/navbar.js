import React,{Component} from 'react'
import { NavLink } from 'react-router-dom'
import DrawerToggleButton from './Sidredrawer/DrawerToggleButton'
import './navbar.scss'
import Logo from '../../pages/NewHome/images/nuevo-log.png'
import { Link, animateScroll as scroll } from "react-scroll";
import resume from './resume.pdf'

const Navbar = (props) => {

    const scrollToTop = () => {
        scroll.scrollToTop();
      };
    
    // const scroll = () => {
    //     const banner = document.getElementById('banner');
    //     if(window.addEventListener.scrollTop() > 86){
    //         banner.addClass('empty')
    //     } else {
    //         banner.removeClass('empty')
    //     }
    // }


    
    

    return (
        <header className="toolbar" id="banner">
            <nav className="toolbar_navigation">
                <div className="toolbar_toggle-button">
                    <DrawerToggleButton click={props.drawerClickHandler}/>
                </div>
                <div className="toolbar_logo">
                    {/* Aqui va el logo */}
                    <img src={Logo} 
                     alt="logo"
                     onClick={scrollToTop}
                     />
                </div>
                <div className="spacer"/>
                <div className=" toolbar_navigation-item">
                    <ul className="nav-items">
                        <li className="nav-item"> <Link 
                         activeClass="active"
                         to="about"
                         spy={true}
                         smooth={true}
                         offset={-70}
                         duration={500}     
                        >ABOUT</Link></li>
                            <li className="nav-item"> <Link 
                         activeClass="active"
                         to="skills"
                         spy={true}
                         smooth={true}
                         offset={-70}
                         duration={500}     
                        >SKILLS</Link></li>
                            <li className="nav-item"> <Link 
                         activeClass="active"
                         to="projects"
                         spy={true}
                         smooth={true}
                         offset={-70}
                         duration={500}     
                        >PORTFOLIO</Link></li>
                           <li className="nav-item"> <Link 
                         activeClass="active"
                         to="contact"
                         spy={true}
                         smooth={true}
                         offset={-70}
                         duration={500}     
                        >CONTACT</Link></li>
                        {/* <li><a href="https://www.dropbox.com/s/un2wyq2r74soiny/CURRICULUM_JOB%20DAVID%20ROMAN.pdf?dl=0" target='_blank' rel='noopener noreferrer' >RESUME</a></li> */}
                        <li><a href={resume} download={resume} >RESUME</a></li>
                        {/* <li><NavLink exact to ="/AboutMe" className="item3" activeClassName="is-selected">About me</NavLink></li> */}
                   
                    </ul>
                </div>
                
            </nav>
        </header>
    )
}

export default Navbar