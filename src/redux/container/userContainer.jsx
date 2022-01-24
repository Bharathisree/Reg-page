import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, TextField, } from "@material-ui/core";
import { Submit } from '../action/userAction';
import PasswordField from 'material-ui-password-field';

const UserContainer = () => {
    const dispatch = useDispatch()
    const [fullname, setFullname] = useState("")
    const [phone, setPhoneNumber] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [gender, setGender] = useState("")
    const [rolename, setRoleid]=useState("")
    const [errfullname, setErrfullname] = useState("Fill the name")
    const [errphonenumber, setErrphonenumber] = useState("Fill the number")
    const [erremail, setErremail] = useState("Fill the email")
    const [errpassword, setErrpassword] = useState("Fill the password")
    const [erraddress, setErraddress] = useState("Fill the password")
    const [errroleid, setErrroleid] = useState("Fill the rollname")
    const [errgender, setErrgender] = useState("Fill the gender")
   // const result = useSelector((state) => state.reducerData.res)

    const handleChange = (e) => {
        if (e.target.name === "username") {
            setFullname(e.target.value)
            // setErrusername("success")
            if ((/^[a-zA-Z  ]*$/).test(e.target.value)) {
                setFullname(e.target.value)
                setErrfullname("success")
            } else {
                setErrfullname("only alphabets")
            }
        }
        if (e.target.name === "userphonenumber") {
            setPhoneNumber(e.target.value)
            setErrphonenumber("success")
        }
        if (e.target.name === "useremail") {
            setEmail(e.target.value)
            setErremail("success")
        }
        if (e.target.name === "useraddress") {
            // setAddress(e.target.value)
            // setErraddress("success")
            if ((/^[a-zA-Z  ]*$/).test(e.target.value)) {
                setAddress(e.target.value)
                setErraddress("success")
            } else {
                setErraddress("only alphabets")
            }
        }
        if (e.target.name === "usergender") {
            // setGender(e.target.value)
            // setErrgender("success")
            if ((/^[a-zA-Z  ]*$/).test(e.target.value)) {
                setGender(e.target.value)
                setErrgender("success")
            } else {
                setErrgender("only alphabets")
            }
        }
        if (e.target.name === "userroleid") {
            setRoleid(e.target.value)
            setErrroleid("success")
        }
        if (e.target.name === "userpassword") {
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
        if ((/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im).test(phone)) {
            setPhoneNumber(phone)
            setErrphonenumber("success")
        }
        else {
            setErrphonenumber("valid phonenumber")
        }

        const value = { fullname, phone, email, password,address,rolename,gender }
        console.log("data", value)
        dispatch(Submit(value))
    }

    return (
        <div>
            <div>
                <center>
                    <p><b>REGISTER </b></p>
                    <div >
                       <label>NAME :  </label>
                        &nbsp; &nbsp; &nbsp;
                       
                        <TextField name="username" type="text" value={fullname} onChange={handleChange} helperText={errfullname} placeholder="fullname" variant="filled" />
                        &nbsp; &nbsp; 
                        
                        <label>EMAIL:</label>
                        &nbsp; &nbsp; &nbsp; &nbsp; 
                        &nbsp; 
                        <TextField name="useremail" type="email" value={email} onChange={handleChange} helperText={erremail} placeholder="Email" variant="filled" />
                    
                        <br></br>
                        <label>CONTACT:</label>
                        &nbsp; &nbsp;
                        <TextField name="userphonenumber" value={phone} onChange={handleChange} helperText={errphonenumber} placeholder="Phone Number" variant="filled" />
                        
                        &nbsp; &nbsp; &nbsp;
                        <label>ADDRESS :</label>
                        &nbsp; &nbsp;
                        <TextField name="useraddress" value={address} onChange={handleChange} helperText={erraddress} placeholder="Address" variant="filled" />
                        
                        <br></br>
                        <label>GENDER :</label>
                        &nbsp; &nbsp;
                        <TextField  name="usergender" value={gender} onChange={handleChange} helperText={errgender} placeholder="gender" variant="filled" />
                        
                        &nbsp; &nbsp; &nbsp;
                        <label>ROLE NAME :</label>
                        &nbsp; &nbsp;  
                        <TextField name="userroleid" value={rolename} onChange={handleChange} helperText={errroleid}  variant="filled" />
                       
                        <br></br>
                        <br></br>
                        <label>PASSWORD</label>
                        &nbsp;
                         &nbsp;
                        <PasswordField name="userpassword" type="password" onChange={handleChange} variant="filled" />
                        
                        <br></br>
                        <div className="Action"><Button onClick={handlesubmit} color="primary">Submit</Button></div>
                    </div>
                </center>
            </div>
        </div>
    )
}


export default UserContainer;

