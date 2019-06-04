import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Landing extends Component {
  render() {
    return (
      <div className="container valign-wrapper" style={{ height: '75vh' }}>
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              A <b style={{ fontFamily: 'monospace' }}>login/auth</b> app with
              the MERN stack from scratch.
            </h4>
            <p className="flow-text grey-text text-darken-1">
              User authentication with passport and JWT
            </p>
            <br />
            <div className="col s6">
              <Link
                to="/register"
                style={{
                  width: '140px',
                  borderRadius: '3px',
                  letterSpacing: '1.5px',
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Register
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: '140px',
                  borderRadius: '3px',
                  letterSpacing: '1.5px',
                }}
                className="btn btn-large btn-flat waves-effect white black-text"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
