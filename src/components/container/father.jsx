import React from 'react';
import Loginformik from '../pure/form/Loginform';
import Header from './header';

const Father = () => {
  return (
    <div className="father">
      <Header></Header>
      <Loginformik></Loginformik>
    </div>
  );
};

export default Father;
