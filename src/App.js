import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

//Pages
import ContactMe from './pages/ContactMe/ContactMe'
import NewHome from './pages/NewHome/Home'
//import FooterV from './pages/ContactMe/Footer/Footer'
// import AboutMe from './pages/AboutMe/AboutMe'
/// Navbar Components ///

import Backdrop from './shared/Backdrop/Backdrop'
import SideDrawer from './shared/navbar/Sidredrawer/Sidedrawer'
import Navbar from './shared/navbar/navbar'
import './App.css';

class App extends Component{


  //  State  //
  state = { 
    sideDrawerOpen:false 
  }

  // the function //

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {return{
      sideDrawerOpen: !prevState.sideDrawerOpen 
    } });
  } ;

  backdropClickHandker = () => {
    this.setState({ sideDrawerOpen:false })
  }

render(){

  let backdrop;
  if( this.state.sideDrawerOpen){
    backdrop = <Backdrop click = {this.drawerToggleClickHandler}/>
  }


  return(
    <BrowserRouter>
      <Fragment>
        <Navbar drawerClickHandler = {this.drawerToggleClickHandler}/>
        <SideDrawer show = {this.state.sideDrawerOpen}/>
        {backdrop}
        <Route exact path='/' component={NewHome}></Route>
        {/* <Route exact path='/ContactMe' component={ContactMe}></Route> */}
        <Route exact path='/home' component={NewHome}></Route>
        {/* <Route exact path='/AboutMe' component={AboutMe}></Route> */}

      {/* <FooterV></FooterV> */}
      </Fragment>
    </BrowserRouter>
  )
}
}



export default App;

