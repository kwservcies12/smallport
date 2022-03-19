import React, { Component }from 'react';
import './Login.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { FacebookLoginButton } from 'react-social-login-buttons';

class LoginForm extends Component {
    render() {
        return(
            <div className="LoginContainer">
                <div className="pic1Container">
                    <div className="pic1">
                        <img src="/images/greyTieOffice.jpg" alt="" />
                        <h1>Glad your interested</h1>
                    </div>
            </div>
                <div className="logwrapper">
                    <Form className="LoginForm">
                        <div className="greet">
                            <h2>Please login to see details</h2>  
                        </div>
                
                        <FormGroup>
                            <Label>Email</Label>
                            <Input type="email" placeholder='Email'></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label>Password</Label>
                            <Input type="password" placeholder='Password'></Input>
                        </FormGroup>
                        <Button className='btn-lg btn-dark btn-block'>
                            <h7>Log in</h7>
                        </Button>
                        <div className='text-center pt-3'>
                            Or Continue with your social account
                        </div>
                        <div className="fbbtn">
                            <FacebookLoginButton className='mt-3 mb-3'/>
                        </div>
                        
                        <div className='text-center pt-4'>
                            <div className="p4con">
                                <a href="/signup">Sign up</a>
                                <span className='p-2'>|</span>
                                <b href="/signup">Forgot Password</b>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        )
    }
}

export default LoginForm;