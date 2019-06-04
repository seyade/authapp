import axios from 'axios';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';
import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from './types';

export const registerUser = (userData, history) => async dispatch => {
  // axios
  //   .post('/api/users/register', userData)
  //   .then(() => history.push('/login'))
  //   .catch(error =>
  //     dispatch({ type: GET_ERRORS, payload: error.response.data })
  //   );

  try {
    await axios.post('/api/users/register', userData);
    await history.push('/dashboard');
  } catch (error) {
    dispatch({ type: GET_ERRORS, payload: error.response.data });
  }
};

export const loginUser = userData => async dispatch => {
  // axios.post('/api/users/login', userData).then(response => {
  //   const { token } = response.data;

  //   localStorage.setItem('jwtToken', token);
  //   setAuthToken(token);

  //   const decoded = jwt_decode(token);

  //   return dispatch(setCurrentUser(decoded));
  // });

  try {
    const response = await axios.post('/api/users/login', userData);
    const { token } = await response.data;

    localStorage.setItem('jwtToken', token);
    setAuthToken(token);

    const decoded = jwt_decode(token);

    return dispatch(setCurrentUser(decoded));
  } catch (error) {
    dispatch({ type: GET_ERRORS, payload: error.response.data });
  }
};

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

export const setUserLoading = () => {
  return {
    type: USER_LOADING,
  };
};

export const logoutUser = () => dispatch => {
  localStorage.removeItem('jwtToken');
  setAuthToken(false);
  dispatch(setCurrentUser({}));
};
