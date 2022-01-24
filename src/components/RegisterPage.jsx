import React, { useState } from 'react'
import { Button, TextField, } from "@material-ui/core";
import PasswordField from 'material-ui-password-field';
import { useDispatch } from 'react-redux';
import { Submit } from '../redux/action/userAction';

const RegisterPage = () => {
  const [username, setName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [errusername, setErrusername] = useState("fill the name")
  const [errphonenumber, setErrphonenumber] = useState("fill the number")
  const [erremail, setErremail] = useState("fill the email")
  const [errpassword, setErrpassword] = useState("fill the password")
  const dispatch=useDispatch()

  const handleChange = (e) => {
    // {
    //   target:{
    //     value:name
    //   }
    // }
    // console.log(e.target.name) 
    // const name = e.target.name
    // console.log({name:e.target.value})
    // const form={...form}
    // form[name]=value
    if (e.target.name === "username") {
      setName(e.target.value)
     //setErrusername("success")
      if ((/^[a-zA-Z  ]*$/).test(e.target.value)) {
        setName(e.target.value)
        setErrusername("success")
      } else {
        setErrusername("only alphabets")
      }
    }
    if (e.target.name === "phonenumber") {
      setPhoneNumber(e.target.value)
      // setErrphonenumber("success")
     }
    if (e.target.name === "email") {
      setEmail(e.target.value)
    }
    if (e.target.name === "password") {
     // setPassword(e.target.value)
     // setErrpassword("success")
      if (e.target.value.length < 8) {
        setPassword(e.target.value)
        setErrpassword("success")
      } else {
        setErrpassword("valid password")
      }
    }
  }
  const handlesubmit = () => {
 
    if ((/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/).test(email)) {
      setEmail(email)
      setErremail("success")
    } else {
      setErremail("valid email")
    }
    if ((/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im).test(phoneNumber)) {
      setPhoneNumber(phoneNumber)
    setErrphonenumber("success")
    }
     else {
      setErrphonenumber("valid phonenumber")
    }
 const value ={username,phoneNumber,email,password}
  dispatch(Submit(value))

    let data = {
      fulName: username,
      Phonenumber: phoneNumber,
      Password: password,
      Email: email,
      Errusername: errusername,
      Erremail: erremail,
      Errphonenumber: errphonenumber,
      Errpassword: errpassword
    }
    console.log("data", data)
  }

  return (
    <div>
      <div >
        <center>
          <p><b>REGISTER </b></p>
          <div >
            <p>Name</p>
            <TextField name="username" type="text" value={username} onChange={handleChange} helperText={errusername} placeholder="fullname" variant="filled" />
            <p>Email</p>
            <TextField name="email" type="email" value={email} onChange={handleChange} helperText={erremail} placeholder="Email" variant="filled" />
            <p>PhoneNumber</p>
            <TextField name="phonenumber"  value={phoneNumber} onChange={handleChange} helperText={errphonenumber} placeholder="Phone Number" variant="filled" />
            <p>Password</p>
            <PasswordField name="password"type="password" onChange={handleChange} variant="filled" />
            <div className="Action"><Button onClick={handlesubmit} color="primary">Submit</Button></div>
          </div>
        </center>
      </div>
    </div >


  );


}

export default RegisterPage;
