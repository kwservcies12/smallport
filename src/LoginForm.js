import React, { Component }from 'react';
import './Login.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { FacebookLoginButton } from 'react-social-login-buttons';

class LoginForm extends Component {
    render() {
        return(
            <div className="LoginContainer">
                <Form className="LoginForm">
                    <h1>
                        <span className="font-weight-bold"></span>
                    </h1>
                    <h2>Welcome</h2>
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
                    <FacebookLoginButton className='mt-3 mb-3'/>
                    <div className='text-center'>
                        <a href="/sing-up">Sing up</a>
                        <span className='p-2'>|</span>
                        <a href="/sing-up">Forgot Password</a>
                    </div>
                </Form>
            </div>
        )
    }
}

export default LoginForm;
