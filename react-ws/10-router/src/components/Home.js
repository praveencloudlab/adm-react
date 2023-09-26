import React from 'react';
import {Link, Route, Routes} from "react-router-dom";
import ProductList from "./ProductList";
import ProductForm from "./ProductForm";
import Cart from "./Cart";
import Dashboard from "./Dashboard";
import NavBar from "./NavBar";

const Home = () => {
    return (
        <div>


           <div className="row">
               <div className="col-2">
                   <NavBar/>
               </div>

               <div className="col-10">
                   <Routes>
                       <Route path='home' element={<Dashboard/>}/>
                       <Route path='list-products' element={<ProductList/>}/>
                       <Route path='add-product' element={<ProductForm/>}/>
                       <Route path='cart' element={<Cart/>}/>
                   </Routes>
               </div>
           </div>








        </div>
    );
};

export default Home;