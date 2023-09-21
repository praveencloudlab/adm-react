import React from 'react';
import { useForm,Controller } from 'react-hook-form';
const App = () => {
    const {watch,control, formState: { errors },register, handleSubmit} =useForm();

    function saveEmployee(data){
        console.log(data)
    }

    const countryStates={
        "INDIA":['Telangana','Maharatra','Karnataka','Delhi','Madhya Pradesh','Kerala','Tamilnadu'],
        "USA":['New York','California','Texas','Virginia','Dellas'],
        "ENGLAND":['London','Massachusetts','Wales'],
        "CANADA":['Ontario','Quebec','Albetra']
    }

    const country=watch("country");
    const states=country?countryStates[country]:[]

    return (
        <div className="container">
          <h1>React Form Demo</h1> <hr/>

            <form onSubmit={handleSubmit(saveEmployee)}>
                <div>
                    <label>Employee Name</label>
                    <input {...register('name',{required:true,minLength:3,pattern:/^[A-Za-z]+$/i})}/>
                    <span className="text-danger">
                        {errors.name?.type==='required' &&(<> Name is Required</>)}
                        {errors.name?.type==='pattern' &&(<> Name should have only alphabets</>)}
                        {errors.name?.type==='minLength' &&(<> Name should be minimum 3 characters</>)}

                    </span>
                </div>
                <div>
                    <label>Email Address</label>
                    <input {...register('email')}/>
                </div>
                <div>
                    <label>Mobile Number</label>
                    <input {...register('mobile')}/>
                </div>

                <div>
                    <select {...register("country")}>
                        <option>Select a Country</option>
                        {Object.keys(countryStates).map((country)=>(
                            <option key={country} value={country}>{country}</option>
                        ))}
                    </select>
                    <br/>
                    <Controller control={control} name="state"
                                render={({field})=>(
                                    <select {...field}>
                                        <option>Select State</option>
                                        {states.map((state)=>(
                                            <option>{state}</option>
                                        ))}
                                    </select>
                                )}/>

                </div>
                <div>
                    <button>Save</button>
                </div>

            </form>

        </div>
    );
};

export default App;