import React from 'react';
import PropTypes from 'prop-types';
import './index.sass';

import FAB from '../FAB';

import demo from '../../assets/demo/fam6.jpg';

function makeHandler(id, func) {
  return () => {
    const modal = document.getElementById(id);
    modal.classList.remove('open');
    const date = modal.getElementsByClassName('date')[0].innerText;
    const label = modal.getElementsByClassName('label')[0].innerText;
    const image = modal.querySelector('img');
    func({ image: image ? image.src : '', date, label });
  };
}

function Modal({
  id, open,
  okAction, cancelAction,
  image, date, text,
}) {
  return (
    <div className={open ? 'modal open' : 'modal'} id={id}>
      <div className="contents card">
        <div className="imageWrapper" contentEditable suppressContentEditableWarning>
          <img alt="" src={image || demo} />
        </div>
        <p className="date" contentEditable suppressContentEditableWarning>
          {date.toISOString().substring(0, 10)}
        </p>
        <p className="label" contentEditable suppressContentEditableWarning>
          {text !== null ? text : 'Enter your text here...'}
        </p>
      </div>
      <div className="buttons">
        <span className="close">
          {cancelAction && <FAB icon="close" action={makeHandler(id, cancelAction)} />}
        </span>
        <br />
        <span className="ok">
          {okAction && <FAB icon="done" action={makeHandler(id, okAction)} />}
        </span>
      </div>
    </div>
  );
}

Modal.propTypes = {
  id: PropTypes.string.isRequired,
  okAction: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.instanceOf(null),
  ]),
  cancelAction: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.instanceOf(null),
  ]),
  image: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(null),
  ]),
  open: PropTypes.bool,
};

Modal.defaultProps = {
  okAction: null,
  cancelAction: null,
  image: '',
  date: new Date(),
  text: null,
  open: false,
};

export default Modal;
