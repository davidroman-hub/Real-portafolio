import React,{Component} from 'react'
import { NavLink } from 'react-router-dom'
import DrawerToggleButton from './Sidredrawer/DrawerToggleButton'
import './navbar.scss'
import Logo from '../../pages/NewHome/images/nuevo-log.png'
import { Link, animateScroll as scroll } from "react-scroll";

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
                        >About</Link></li>
                            <li className="nav-item"> <Link 
                         activeClass="active"
                         to="skills"
                         spy={true}
                         smooth={true}
                         offset={-70}
                         duration={500}     
                        >Skills</Link></li>

                        {/* <li><NavLink exact to ="/AboutMe" className="item3" activeClassName="is-selected">About me</NavLink></li> */}
                        <li><NavLink exact to ="/ContactMe" className="item3" activeClassName="is-selected">Contact me</NavLink></li>
                    </ul>
                </div>
                
            </nav>
        </header>
    )
}

export default Navbar