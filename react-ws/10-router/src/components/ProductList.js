import React, {useState,useEffect} from 'react';
import ProductService from "./ProductService";
import ProductDetails from "./ProductDetails";
import {Link} from "react-router-dom";

const ProductList = () => {

    const[products,setProducts]=useState([])

    useEffect(()=>{
        const fetchProducts=async ()=>{
            const data=await ProductService.listAllProducts();
            setProducts(data);
        }
        fetchProducts();
    },[])

    function renderProducts(){
        return products.map(product=>{
            return(
                <div className="col-3 mb-3" key={product.id}>
                    <div className="card" >
                        <Link className="nav-link" aria-current="page" to={`/product-details/${product.id}`}>
                            <img width="100px" height="150px" src={product.image} className="card-img-top" alt={product.description}/>
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <hr/>
                            <p className="card-text">{product.price}</p>

                        </div>
                    </div>
                </div>
            )
        })
    }


    return (
        <div>
            <div className="row">
                {renderProducts()}
            </div>
        </div>
    );
};

export default ProductList;