import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


class Login extends Component {
  
render() {
    return (
      <div>
        <Form>
            {console.log('here')}
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
    </Form.Text>
    <Form>    

    </Form>
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
<Form>    

        
    </Form>
  <Form.Group controlId="formBasicChecbox">
    <Form.Check type="checkbox" label="remember me" />
  </Form.Group>
  {/* <Button variant="primary" type="login" >
    Log in
  </Button> */}

  <Button href="http://localhost:3001/api/admin">Log in</Button>
  {/* <Button variant="primary" type="login" >
    Log in
  </Button> */}

</Form>
</div>
    );
  }

}


export default Login;