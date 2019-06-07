import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logoutUser } from '../../actions/authActions';

export class Dashboard extends Component {
  onLogoutClick = event => {
    event.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props;
    const userName = user.name.split(' ')[0];

    return (
      <div style={{ height: '75vh' }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              Hi, <b>{userName}</b> welcome to{' '}
              <span style={{ fontFamily: 'monospace' }}>Authapp</span>
            </h4>
            <button
              style={{
                width: '150px',
                borderRadius: '3px',
                letterSpacing: '1.5px',
                marginTop: '1rem',
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  user: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired,
};

const mapStatetoProps = state => ({
  user: state.auth.user,
});

export default connect(
  mapStatetoProps,
  { logoutUser }
)(Dashboard);
