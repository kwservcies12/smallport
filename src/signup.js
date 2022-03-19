import { useDispatch } from 'react-redux';
import "./signup.css";
import { login } from "./userSlice";
import React, { useState } from "react";
import { Button, FormGroup,  Input } from 'reactstrap';


const Signup = () => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(
            login({
                email: email,
                password: password,
                loggedIn: true,
            })
        );
    };

    

  

  return (
    <div className="login-Container">
        <div className="logwrapper">
            <form className="LoginForm" onSubmit={(e) => handleSubmit(e)}>
                <div className="welcome">
                    <h1>Sign up</h1>
                </div>
                <FormGroup>
                    <Input 
                        type="email"
                        placehodler="Email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Input
                        type="password"
                        placehodler="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </FormGroup>
                <Button type='submit' className='btn-lg btn-dark btn-block1'>
                    <d href="/Home">Submit</d>
                </Button>
            </form>
        </div>
    </div>
    
  )
}

export default Signup;
