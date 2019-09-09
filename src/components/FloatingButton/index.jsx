import React from 'react';
import './index.sass';

import Icon from '../Icon';

function FloatingButton({ action, dropdown }) {
  return (
    <button type="button" className="floating-button" onClick={action}>
      <Icon name="test" />
    </button>
  );
}

export default FloatingButton;
