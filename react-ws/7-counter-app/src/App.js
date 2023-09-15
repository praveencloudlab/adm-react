import React from 'react';
import BtnGen from './BtnGen';

const App = () => {

  let numbers=[20,20,30,-5,-10,40,-20,50]
  return (
    <div className='container'>

      <h1>Counter APP</h1> <hr/>

        <BtnGen btnLables={numbers}/>
      
    </div>
  );
};

export default App;