import {useState} from 'react';

const BtnGen = ({btnLables}) => {

    const[counter,setCounter]=useState(0)

    function f1(btnLable){
        
    }

    function renderButtons(){
        return btnLables.map(btnLable=>{
            return(
                <div className='col-3 text-center mt-4'>
                    <span>{counter}</span>
                    <hr/>
                     <button onClick={()=>setCounter(counter+1)}>{btnLable}</button>

                </div>
            )
        })
    }
    return (
        <div>

            <div className='row'>
            {renderButtons()}
            </div>
            
            
        </div>
    );
};

export default BtnGen;