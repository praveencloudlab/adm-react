import React from 'react';
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to={"home"}>Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to={"list-products"}>Display</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to={"add-product"}>Add Product</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to={"cart"}>Cart</Link>

                </li>
            </ul>

        </div>
    );
};

export default NavBar;