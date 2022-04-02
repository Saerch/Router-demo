import React from "react";
import { NavLink } from "react-router-dom";

function Product(){
    return(
<div className="page-heading">
                 <h1>Product</h1>
<nav>

<NavLink to ="first">First</NavLink>
<NavLink to ="first">Second</NavLink>

</nav>
        </div>
    )
}
export default Product;