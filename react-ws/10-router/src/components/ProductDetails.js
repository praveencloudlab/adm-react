import React, {useState,useEffect} from 'react';
import {Routes, Route, useParams, Link} from 'react-router-dom';
import ProductService from "./ProductService";

const ProductDetails = () => {

    let { pid } = useParams();
    console.log(">>> PID:: "+pid)

    const[product,setProduct]=useState({})
    useEffect(()=>{
        ProductService.fetchProductById(pid)
            .then(response=>setProduct(response))
    },[])

    return (
        <div>

            <div className="card" >

                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <hr/>

                    <div className="row">
                        <div className="col-3">
                            <img width="100px" height="150px" src={product.image} className="card-img-top" alt={product.description}/>
                        </div>
                        <div className="col-9 mt-1">
                            <h5>{product.description}</h5>
                        </div>
                    </div>

                    <hr/>
                    <div style={{"margin":"5px"}} className="card-text text-center"><h4>Price:{product.price}</h4>

                        <span style={{"margin":"5px"}}> <a href="#" className="btn btn-primary">Add to Cart</a></span>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default ProductDetails;