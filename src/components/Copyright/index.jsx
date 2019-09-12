import React from 'react';
import './index.sass';

import icon from '../../assets/images/logo32.png';

function Copyright() {
  return (
    <div className="copyright">
      <p>
        <img src={icon} alt="[]" />
        CardMe
      </p>
      <p>&copy; Maxim Kudryavtsev, 2019</p>
    </div>
  );
}

export default Copyright;
