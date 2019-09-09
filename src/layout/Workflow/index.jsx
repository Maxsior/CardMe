import React from 'react';
import Card from '../../components/Card';
import fi1 from '../../assets/demo/fam1.jpg';
import './index.sass';

function Workflow() {
  return (
    <div>
      <h1>This is CardMe!</h1>
      <Card img={fi1} date={new Date(2018, 10, 1)} text="My Autumn Family Photo!" />
    </div>
  );
}

export default Workflow;
