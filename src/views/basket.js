import React from "react";
import { ProductList } from "./order";

export default function Basket({basket}) {
    return(
        <div>
            <ProductList basket={basket}/>
        </div>
    );
}