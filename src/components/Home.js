import React, { Component } from 'react'
import datalink from 'react'

class Home extends Component {
  constructor() {
  super()
   this.state = {
    tokendata : ""
   };
    
}

componentDidMount() {

// document.title = 'Content Page | DBC'
const id = this.props.location.search;
this.setState({tokendata:id})
// console.log(id, 'hgffgh')
}

  render() {
    return (
      <div className="container">   
        <h1 className="text-center make" style={{background: "#007bff",color: "white"}}>TradeTips</h1>         
        <div className="row">
          <div className="col-md-3">
    <nav id="sidebar" class="sidebar-wrapper">
      <div class="sidebar-content">
         <div class="sidebar-menu">
           <ul style={{background: "#007bff",height: "300px"}}>
            <li class="sidebar-dropdown" style={{padding: "10px" , display: "inherit"}}>
              <a href={`/home${this.state.tokendata}`}>
                &nbsp;
                <span style={{color: "white"}}><b>Dashboard</b></span>
              </a>              
            </li>            
            <li style={{padding: "10px", display: "inherit"}}>
              <a href={`/tip${this.state.tokendata}`}>
               &nbsp;
                <span style={{color: "white"}}><b>Make a Tip</b></span>
              </a>
            </li>
            <li style={{padding: "10px", display: "inherit"}}>
              <a href={`/chatmanage${this.state.tokendata}`}>
               &nbsp;
                <span style={{color: "white"}}><b>Chat Managment</b></span>
              </a>
            </li>
            <li style={{padding: "10px", display: "inherit"}}>
              <a href="/">
               &nbsp;
                <span style={{color: "white"}}><b>Logout</b></span>
              </a>
            </li>
          </ul>
        </div>
        </div>
      </nav>
          </div>
          <div className="col-md-9">
            <h4 className="text-center">Welcome to MENTOR dashboard !!!  </h4>
          </div>
        </div>
      </div>
    )
  }
}

export default Home  