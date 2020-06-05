import React, { Component } from 'react'

class Landing extends Component {
  constructor() {
    super()
    this.state = {
      userName: '',
      password: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    var formdata = new FormData();
    formdata.append("userName", this.state.userName);
    formdata.append("password", this.state.password);

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };

    fetch("http://3.93.137.122:6080/api/auth/appSignIn", requestOptions)
      .then(response => response.json())
      .then(response => {
      var datak = JSON.stringify(response);
      var dataResult = JSON.parse(datak);
          
          // alert(dataResult);

      if(dataResult.accessToken){

          if(dataResult.userName != "admin"){
               
            var tdss = dataResult.accessToken;
            var tds1 = dataResult.accessTokenStreamIO;
            var tds2 = dataResult.userName;
            window.location.href = "/home?tokendata="+tdss+"&streamtoken="+tds1+"&uname="+tds2;  

          } else {
            alert("Invalid Username or Password");
          }
       } else {
          alert("Invalid Username or Password");
      }
    
     }).catch(err => {

      alert("Invalid Username or Password");
    });
  }

  render() {
    return (
      <div className="container">   
      <h1 className="text-center make" style={{background: "#007bff",color: "white"}}>TradeTips</h1> 
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="text"
                  className="form-control"
                  name="userName"
                  placeholder="Enter userName"
                  value={this.state.userName}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Landing  