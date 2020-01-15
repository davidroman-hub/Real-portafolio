import React, { Component, Fragment } from 'react';
import {BrowserRouter, Route } from 'react-router-dom'

/// Navbar Components ///

import Backdrop from './shared/Backdrop/Backdrop'
import SideDrawer from './shared/navbar/Sidredrawer/Sidedrawer'
import Navbar from './shared/navbar/navbar'
import './App.css';

// class App extends Component{
// //  State  //
//   state = { 
//     sideDrawerOpen:false 
//   }

//   // /the function //

//   drawerToggleClickHandler = () => {
//     this.setState((prevState) => {return {
//       sideDrawerOpen: !prevState.sideDrawerOpen
//     } });
//   } ;

//   backdropClickHandker = () => {
//     this.setState({sideDrawerOpen:false})
//   }

// render(){

//   let backdrop;
//   if( this.state.sideDrawerOpen){
//     backdrop = <Backdrop click = {this.drawerToggleClickHandler}/>
//   }


//   return(
//     <BrowserRouter>
//       <Fragment>
//         <Navbar drawerClickHandler = {this.drawerToggleClickHandler}/>
//         <SideDrawer show = {this.state.sideDrawerOpen}/>
//         {backdrop}
      
//       </Fragment>
//     </BrowserRouter>
//   )
// }
// }



// export default App;

class App extends Component{ 
  state = { 
    sideDrawerOpen: false
  }
//la funcion 
 drawerToggleClickHandler = () => { this.setState((prevState) => {return {sideDrawerOpen: !prevState.sideDrawerOpen};
   });
  };
  
  backdropClickhandler = () => {
     this.setState({SideDrawerOpen:false})
  };

 render(){
 
   let backdrop;
   
   if (this.state.sideDrawerOpen){ 
     backdrop= <Backdrop click={this.drawerToggleClickHandler}/>
   }


return(
  <BrowserRouter>
  <Fragment>
 {/* <div style={{height:'100%'}} className="App"> */}
   <Navbar drawerClickHandler={this.drawerToggleClickHandler}/>
   <SideDrawer show={this.state.sideDrawerOpen}/>
   {backdrop}
   
    
 {/* </div> */}
 </Fragment>
 </BrowserRouter>
     )
   }
 }
 
 



export default App;


