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
      <p>
        &copy;&nbsp;
        <a href="mailto: maxsior@mail.ru">Maxim Kudryavtsev</a>
        , 2019
      </p>
      <p>for Xsolla Summer School 2019</p>
    </div>
  );
}

export default Copyright;
