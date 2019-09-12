import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';

function Action({ action, icon }) {
  return <Icon name={icon} onClick={action} />;
}

Action.propTypes = {
  action: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Action;
