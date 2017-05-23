import React from "react";
import { Jumbotron, Button, Modal,OverlayTrigger } from 'react-bootstrap';

export class Home extends React.Component{
    render(){
      return(
        <div className="login-form-wrap">
            <form className="login-form">
              <div className="form-group">
                <label htmlFor ="email"
                className="label">
                EMAIL
                </label>
                <input type="email"
                       className="form-input"
                       name="email"
                       onChange={this.handleChange}
                       placeholder="brucewayne@gmail.com" />
              </div>
              <div className="form-group">
                <label htmlFor ="password"
                       className="label">
                       PASSWORD
                </label>
                <input type="password"
                className="form-input"
                 name="password"
                     onChange={this.handleChange}
                   placeholder="************" />
              </div>
              <div className='btn-login-wrap'>
                <button type="button" className="btn btn-login" name="button">LOG IN</button>
              </div>
            </form>
            <div className="signUp">
              <a href="#">New Member Sign Up </a><span className="sep"> | </span> <a href="#">Forgot Password</a>
            </div>
        </div>
      );
    }
}
