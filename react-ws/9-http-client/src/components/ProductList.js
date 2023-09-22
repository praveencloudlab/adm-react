import {useEffect,useState} from 'react';
import ProductService from "../product-service";
import ProductDetails from "./ProductDetails";

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
                        <ProductDetails product={product}/>
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