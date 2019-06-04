import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { loginUser } from '../../actions/authActions';
import BackButton from '../../components/BackButton';

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {},
    };
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.loginUser(userData);

    console.log('LOGIN:USERDATA::::', userData);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="container">
        <div className="row" styel={{ marginTop: '4rem' }}>
          <div className="col s8 offset-s2">
            <BackButton to="/" iconType="keyboard_backspace" />
            <div className="col s12" style={{ paddingLeft: '11.250px' }}>
              <h4>
                <b>Login</b> below
              </h4>
              <p className="grey-text text-darken-1">
                Don't have an account? <Link to="/register">Sign up</Link>
              </p>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="text"
                  className={classnames('', {
                    invalid: errors.email || errors.emailnotfound,
                  })}
                />
                <label htmlFor="email">Email</label>
                <span className="red-text">
                  {errors.email}
                  {errors.emailnotfound}
                </span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={classnames('', {
                    invalid: errors.password || errors.passwordincorrect,
                  })}
                />
                <label htmlFor="password">Password</label>
                <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
              </div>
              <div className="col s12" style={{ paddingLeft: '11.250px' }}>
                <button
                  style={{
                    width: '150px',
                    borderRadius: '3px',
                    letterSpacing: '1.5px',
                    marginTop: '1rem',
                    color: '#fff',
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
});

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

export default connect(
  mapStateToProps,
  { loginUser }
)(withRouter(Login));
