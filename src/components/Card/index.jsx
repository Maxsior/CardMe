import React from 'react';
import PropTypes from 'prop-types';
import './index.sass';

import Icon from '../Icon';

import handlers from './handlers';

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      position: props.position || [
        Math.random() * (window.innerWidth / 2),
        Math.random() * (window.innerHeight / 2),
      ],
      rotation: props.rotation,
    };

    this.rotationHandler = handlers.initRotationHandler(this);
    this.movementHandler = handlers.initMovementHandler(this);
  }

  render() {
    const { img, date, text } = this.props;
    const { rotation, position } = this.state;
    return (
      <div
        className="card"
        style={{
          transform: `rotate(${rotation}rad)`,
          left: `${position[0]}px`,
          top: `${position[1]}px`,
        }}
      >
        <div className="imageWrapper">
          <img src={img} alt="" />
        </div>
        <p className="date">
          { date && date.toLocaleDateString() }
        </p>
        <p className="label">
          { text }
        </p>
        <div className="editbar">
          <Icon name="edit" />
          <Icon
            name="autorenew"
            onMouseDown={this.rotationHandler}
          />
          <Icon
            name="open_with"
            onMouseDown={this.movementHandler}
          />
        </div>
      </div>
    );
  }
}


Card.propTypes = {
  img: PropTypes.string.isRequired,
  text: PropTypes.string,
  date: PropTypes.oneOfType([
    PropTypes.instanceOf(Date),
    PropTypes.instanceOf(null),
  ]),
  position: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.instanceOf(null),
  ]),
  rotation: PropTypes.number,
};

Card.defaultProps = {
  text: '',
  date: null,
  position: null,
  rotation: 0,
};


export default Card;
