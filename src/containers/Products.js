import React from "react";
import { useSelector } from "react-redux";
import GarmentCreator from "../components/GarmentCreator/GarmentCreator";

import ProductItem from "../components/Products/ProductItem";
import "./Products.css";

const Products = (props) => {
    const productList = useSelector((state) => state.products);
    return (
        <React.Fragment>
            <GarmentCreator></GarmentCreator>
            <ul className="products-list">
                {productList.map((prod) => (
                    <ProductItem
                        key={prod.id}
                        id={prod.id}
                        title={prod.title}
                        description={prod.description}
                        isFav={prod.isFavorite}
                    />
                ))}
            </ul>
        </React.Fragment>
    );
};

export default Products;
