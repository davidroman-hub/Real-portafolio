import React from 'react'
import { NavLink } from 'react-router-dom'
import './Sidedrawer.scss'
import { Link, animateScroll as scroll } from "react-scroll";

const SideDrawer = (props) => {
    let drawerClasses = ['side-drawer'];
    if (props.show){
        drawerClasses = ['side-drawer', 'open']
    }

    const scrollToTop = () => {
        scroll.scrollToTop();
      };

return(
<nav className = { drawerClasses.join(' ')}>
    
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
</nav>
)

}

export default SideDrawer