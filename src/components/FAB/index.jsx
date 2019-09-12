import React from 'react';
import PropTypes from 'prop-types';
import './index.sass';

import Action from './Action';
import Icon from '../Icon';

function FAB({
  icon, action, children, ...props
}) {
  return (
    <div type="button" className="fab" {...props}>
      <Icon name={icon} onClick={action} />
      <div className="fab-content">
        {children}
      </div>
    </div>
  );
}

FAB.Action = Action;

FAB.propTypes = {
  icon: PropTypes.string.isRequired,
  action: PropTypes.func,
  children: PropTypes.arrayOf(Action),
};

FAB.defaultProps = {
  action: () => null,
  children: [],
};

export default FAB;
