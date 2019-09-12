import React from 'react';

import './index.sass';

import Card from '../../components/Card';
import FAB from '../../components/FAB';
import Copyright from '../../components/Copyright';


import fi1 from '../../assets/demo/fam1.jpg';
import fi2 from '../../assets/demo/fam2.jpg';

function Workflow() {
  return (
    <div>
      <FAB icon="add" action={console.log} />

      <FAB icon="person">
        <FAB.Action icon="class" action={console.info} />
        <FAB.Action icon="dashboard" action={console.log} />
      </FAB>
      <Card img={fi1} date={new Date(2018, 10, 1)} text="My Autumn Family Photo!" />
      <Card img={fi2} date={new Date(2018, 6, 3)} text="Little Ann with parents" />

      <Copyright />
    </div>
  );
}

export default Workflow;
