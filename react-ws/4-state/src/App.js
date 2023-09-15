import {useState} from 'react';
import Greet from './Greet';

const App = () => {

   const[counter,setCounter]=useState(1); // useState always retus an array.
   const[even,setEven] = useState(2); 
   const[odd,setOdd] = useState(1);
   const[greetMsg,setGreetMsg] = useState('')
  
   function increment(){
    console.log(">> App:: increment");
    setCounter(counter+1) // state is updated
  }
  return (
    <div>
     
      <h1>App Component</h1> 
     
      <h3>Count: {counter}</h3>
      <h3>Even: {even}</h3>
      <h3>Odd: {odd}</h3>

      <button onClick={increment}>Count</button>
      <button onClick={()=>setEven(even+2)}>Increment Even</button>
      <button onClick={()=>setOdd(odd+2)}>Increment Odd</button>
      <button onClick={()=>setGreetMsg('Good Morning')}>Good Morning</button>
      <button onClick={()=>setGreetMsg('Good Noon')}>Good Noon</button>
      <button onClick={()=>setGreetMsg('Good Evening')}>Good Evening</button>
      <button onClick={()=>setGreetMsg('')}>Exit</button>
      <hr/>

      {greetMsg? <Greet msg={greetMsg}/>:null}
     
    </div>
  );
};

export default App;