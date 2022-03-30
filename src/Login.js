import { Button,Form } from "react-bootstrap";
import React,{useState, userEffect} from 'react';

function Login() {

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  function login(){
    console.log(email,password);
    let item={email,password};
    let result = await fetch(""),{}

  }  
  
  return (
    <div className="App">
     <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" 
    onChange={(e)=>setEmail(e.target.value)}/>
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <input type="password" placeholder="Password" value={password}
    onChange={(e)=>setPassword(e.target.value)}/>
  </Form.Group>
{/* <button onClick={login}></button> */}
  <Button type="submit" onClick={login}>
    Submit
  </Button>
</Form>
    </div>
  );
}

export default Login