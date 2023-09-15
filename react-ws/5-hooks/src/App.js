import {useState,useEffect} from 'react';

const App = () => {

  const[counter,setCounter] =useState(1);
  const[even,setEven] = useState(2);
  const[odd,setOdd] = useState(1);

  useEffect(()=>{ //invokes only once in a life cycle
    console.log("1-Only once...");
  },[])

  useEffect(()=>{// invokes on every state change..
    console.log("2-Always");
  })

  useEffect(()=>{
    console.log("3-counter updated...");
  },[counter])

  useEffect(()=>{
    console.log("4-even updated...");
  },[even])

  useEffect(()=>{
    console.log("5-odd updated...");
  },[odd])

  useEffect(()=>{
    console.log("6-counter or odd updated...");
  },[counter,odd])






  return (
    <div className='container'>
      <h1>React Hooks Demo</h1> <hr/>

      <h3>Couter: {counter}</h3>
      <h3>Even: {even}</h3>
      <h3>Odd: {odd}</h3>
      <hr/>
      <button onClick={()=>setCounter(counter+1)}>Counter</button>
      <button onClick={()=>setEven(even+2)}>Even</button>
      <button onClick={()=>setOdd(odd+2)}>Odd</button>


    </div>
  );
};

export default App;