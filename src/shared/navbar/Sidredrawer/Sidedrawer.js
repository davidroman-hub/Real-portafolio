import React from 'react'
import { NavLink } from 'react-router-dom'
import './Sidedrawer.scss'

const SideDrawer = (props) => {
    let drawerClasses = ['side-drawer'];
    if (props.show){
        drawerClasses = ['side-drawer', 'open']
    }
return(
<nav className = { drawerClasses.join(' ')}>
    <ul>
      <li><NavLink exact to ="/Home" className="item2" activeClassName="is-selected">Home</NavLink></li>
      <li><NavLink exact to ="/AboutMe" className="item2" activeClassName="is-selected">About Me</NavLink></li>
      <li><NavLink exact to ="/ContactMe" className="item2" activeClassName="is-selected">Contact Me</NavLink></li>

    </ul>
</nav>
)

}

export default SideDrawer