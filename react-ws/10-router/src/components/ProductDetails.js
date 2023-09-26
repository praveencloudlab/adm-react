import React from 'react';

const ProductDetails = ({product}) => {
    return (
        <div>
            <div className="card" >
                <img width="100px" height="150px" src={product.image} className="card-img-top" alt={product.description}/>
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <hr/>
                    <p className="card-text">{product.price}</p>
                    <a href="#" className="btn btn-primary">Add to Cart</a>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;