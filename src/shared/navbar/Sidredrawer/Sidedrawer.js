import React from 'react'
import { NavLink } from 'react-router-dom'
import './Sidedrawer.scss'
import { Link, animateScroll as scroll } from "react-scroll";
import resume from '../../navbar/resume.pdf'


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
                        <li className="take" disabled>X</li>
                        <li className="nav-item mt-4"> <Link 
                         activeClass="active"
                         to="about"
                         spy={true}
                         smooth={true}
                         offset={-70}
                         duration={500}     
                        >ABOUT</Link></li>
                        <li className="nav-item"><Link 
                         activeClass="active"
                         to="skills"
                         spy={true}
                         smooth={true}
                         offset={-70}
                         duration={500}     
                        >SKILLS</Link></li>
                          <li className="nav-item"><Link 
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
                         {/* <li><a
                           className='nav-item'
                            href="https://www.dropbox.com/s/un2wyq2r74soiny/CURRICULUM_JOB%20DAVID%20ROMAN.pdf?dl=0" 
                            target='_blank' 
                            rel='noopener noreferrer' >
                             RESUME
                             </a>
                        </li> */}
                         <li><a className="nav-item" href={resume} download={resume} >RESUME</a></li>

                        {/* <li><NavLink exact to ="/AboutMe" className="item3" activeClassName="is-selected">About me</NavLink></li> */}
                        

    </ul>
</nav>
)

}

export default SideDrawer