import React from 'react';
import PropTypes from 'prop-types';

function Icon({ name, ...props }) {
  return <i className="icon material-icons" {...props}>{name}</i>;
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};


export default Icon;
