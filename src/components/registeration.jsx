import React, { Component } from 'react';
import { Button, TextField, } from "@material-ui/core";
import PasswordField from 'material-ui-password-field';

class Registration extends Component {
  constructor() {
    super()
    this.state = {
      name: "",
      email: "",
      PhoneNumber: "",
      password: "",
      errname: "",
      errphonenum: "",
      erremail: "",
      errpassword: "",
    };

    this.handleChange = this.handleChange.bind(this)
    this.handlesubmit = this.handlesubmit.bind(this)

  }

  handlesubmit() {

    // const { name, email, PhoneNumber, password } = this.state;
    //     let data = {
    //       fullName: name,
    //       email: email,
    //       phone: PhoneNumber,
    //       password: password,   
    //     }
    //  console.log("data", data)
    alert("Registered Successfully")
  }
  handleChange(e) {
    console.log(this.state)

    if (e.target.name == "firstname") {
      if (e.target.value == " ") {

        this.setState({ errname: e.target.value == "" ? "Firstname should not be empty" : "Only alphabets will allowed" })
      } else {
        this.setState({ name: e.target.value, errname: "" })
      }
    }
    else if (e.target.name == "phonenumber") {
      if (e.target.value == "") {
        this.setState({ errphonenum: e.target.value == "" ? "phonenumber should not be empty" : "please enter a valid phone number " })
      } else {
        this.setState({ PhoneNumber: e.target.value, errphonenum: "" })
      }
    }
    else if (e.target.name == "email") {
      if (e.target.value == "") {
        this.setState({ erremail: e.target.value == "" ? "email should not be empty" : "please enter valid email " })
      } else {
        this.setState({ email: e.target.value, erremail: "" })
      }
    }
    else if (e.target.name == "password") {
      if (e.target.value == "") {
        this.setState({ errpassword: e.target.value == "" ? "password should not be empty" : "password should contain atleast 8 characters " })
      } else {
        this.setState({ password: e.target.value, errpassword: "" })
      }

    }

  }


  render() {
    const { errname, erremail, errpassword, errphonenum } = this.state
    return (
      <div>
        <div>
          <center>
            <p style={{ color: 'bold black' }} >REGISTER</p>
            <div >
              <p>Name</p>
              <TextField name="firstname" onChange={this.handleChange} helperText={errname} variant="filled" placeholder="Name" />

              <p>Email</p>
              <TextField name="email" onChange={this.handleChange} helperText={erremail} placeholder="Email" variant="filled" />

              <p >PhoneNumber</p>
              <TextField name="phonenumber" onChange={this.handleChange} placeholder="Phone Number" helperText={errphonenum} variant="filled" />

              <p >Password</p>
              <PasswordField name="password" onChange={this.handleChange} helperText={errpassword} variant="filled" />

              <div className="Action"><Button onClick={this.handlesubmit} color="primary" >Submit</Button></div>
            </div>
          </center>
          {/* </div>USER DETAILS <div> {this.result}*/}
        </div>
      </div >
    );
  }

}
export default Registration;

// (/^[a-zA-Z  ]*$/ )
// (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)
// (/[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g)