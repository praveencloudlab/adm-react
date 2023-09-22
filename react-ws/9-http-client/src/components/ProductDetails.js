import React from 'react';

const ProductDetails = ({product}) => {
    return (
        <div>
            <div className="card" style={{"width": "18rem"}}>
                <img width="50px" height="100px" src={product.thumbnail} className="card-img-top" alt={product.description}/>
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <a href="#" className="btn btn-primary">Add to Cart</a>
                </div>
            </div>
            
        </div>
    );
};

export default ProductDetails;