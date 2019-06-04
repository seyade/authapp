import React from 'react';
import { Link } from 'react-router-dom';
import './BackButton.scss';

const BackButton = ({ to, iconType }) => {
  return (
    <span className="back-button">
      <Link to={to} className="btn-flat waves-effect">
        <i className="material-icons">{iconType}</i> Back to home
      </Link>
    </span>
  );
};

export default BackButton;
