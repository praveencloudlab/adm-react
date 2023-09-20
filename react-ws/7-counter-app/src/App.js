import {useState} from 'react';
import BtnGen from './BtnGen';

const App = () => {

  let numbers=[10,20,30,-5,-10,40,-20,50]
  const[totalCount,setTotalCount]=useState(0);
  const[resetCounter,setResetCounter]=useState(0);


  function f1(childLabel){
    setTotalCount(totalCount+childLabel);

  }

  function renderNumbers(){
    return numbers.map((number,idx) =>{
      return(
        <div className='col-3' key={idx}>
            <BtnGen btnLable={number} reset={resetCounter} parentFun={(e)=>f1(e)}/>
        </div>
      )

    });
  }


   function handleReset(){
    setResetCounter(resetCounter+1);
    setTotalCount(0);
   }

  return (
    <div className='container'>

      <h1>Counter APP</h1> <hr/>

      <div className='text-center'>
        <button onClick={handleReset}>Reset All</button>
      </div>
      <hr/>
      <div className='row'>
      {renderNumbers()}
      </div>

      <hr/>
      <div className='text-center'>
        <h3>Total Count: {totalCount}</h3>
      </div>
      <hr/>
      
    

      
    </div>
  );
};

export default App;