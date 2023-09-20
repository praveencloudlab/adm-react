import {useState,useEffect} from 'react';

const BtnGen = ({btnLable,parentFun,reset}) => {
    const[counter,setCounter]=useState(0)

    //This will call only when parent component clicked on ResetAll button
    useEffect(()=>{
        setCounter(0);
    },[reset])

    function f1(){
        setCounter(counter+1)
        parentFun(btnLable);

    }
    return (
        <div>

            <div className='card mb-3'>
                <div className='card-body text-center'>
                    <span className="text-center"><h5>{counter}</h5></span>
                    <hr/>
                     <button className='btn btn-primary' onClick={f1}><h3>{btnLable}</h3></button>
                   
                </div>
                    
            </div>
            
            
        </div>
    );
};

export default BtnGen;