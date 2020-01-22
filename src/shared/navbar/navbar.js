import React from 'react'
import { NavLink } from 'react-router-dom'
import DrawerToggleButton from './Sidredrawer/DrawerToggleButton'
import './navbar.scss'

const Navbar = (props) => {
    return (
        <header className="toolbar">
            <nav className="toolbar_navigation">
                <div className="toolbar_toggle-button">
                    <DrawerToggleButton click={props.drawerClickHandler}/>
                </div>
                <div className="toolbar__logo">
                    {/* Aqui va el logo */}
                </div>
                <div className="spacer"/>
                <div className=" toolbar_navigation-item">
                    <ul>
                        <li><NavLink exact to ="/Home" className="item3" activeClassName="is-selected">Home</NavLink></li>
                        <li><NavLink exact to ="/AboutMe" className="item3" activeClassName="is-selected">About me</NavLink></li>
                        <li><NavLink exact to ="/ContactMe" className="item3" activeClassName="is-selected">Contact me</NavLink></li>
                    </ul>
                </div>

            </nav>
        </header>
    )
}

export default Navbar