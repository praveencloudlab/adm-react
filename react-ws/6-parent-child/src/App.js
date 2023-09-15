import React from 'react';
import Numbers from './Numbers';

const App = () => {

  let numbers=[87,43,12,87,43,87,32,56]


  function renderNumbers(){
    return numbers.map((number,idx) =>{
      return(
       <Numbers num={number} key={idx}/>
      )
    })
  }

  return (
    <div className='container'>

      <h1>Component Communications</h1> <hr/>
      <ul>
      {renderNumbers()}
      </ul>
     

    </div>
  );
};

export default App;