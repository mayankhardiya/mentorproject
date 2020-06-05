import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Landing from './components/Landing'
import Profile from './components/Profile'
import Home from './components/Home'
import Tip from './components/Tip'
import ChatManage from './components/ChatManage'
import Yourroom from './components/Yourroom'
// import Navbar from './components/Navbar'


// var url_string = window.location.href; 
//    var urls = new URL(url_string);
//    var tokens = urls.searchParams.get("tokendata");
//    var tds1 = urls.searchParams.get("streamtoken");
//    var tds2 = urls.searchParams.get("uname");
//    var datalink = "/home?tokendata="+tokens+"&streamtoken="+tds1+"&uname="+tds2;


class App extends Component {

  constructor(props) {
super(props)
this.state = {
isLoading: true,
user: {},
tokendata: null
}
}

// const id = this.props.match.params.id;

  render() {
    return (
      <Router>
        <div className="App">      
          <Route exact path="/" component={Landing} />
        
            <Route exact path="/profile" component={Profile} {...this.props}/>
            <Route exact path="/home" component={Home} {...this.props}/>
            <Route exact path="/tip" component={Tip} {...this.props}/>
            <Route exact path="/chatmanage" component={ChatManage} {...this.props}/>
            <Route exact path="/yourroom" component={Yourroom} {...this.props}/>
        
        </div>
      </Router>
    )
  }
}

export default App