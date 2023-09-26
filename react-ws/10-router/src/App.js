import React from 'react';
import Home from "./components/Home";

const App = () => {
    return (
        <div className="container">

            <div className="alert alert-info text-center">
                <h2>Router Demo</h2>
            </div>
            <Home/>
          
        </div>
    );
};

export default App;