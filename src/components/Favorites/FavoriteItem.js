import React from "react";
import { useDispatch } from "react-redux";
import { toggleFav } from "../../store/actions/products";
import Card from "../UI/Card";
import "./FavoriteItem.css";

const FavoriteItem = (props) => {
    const dispatch = useDispatch();

    const toggleFavHandler = () => {
        dispatch(toggleFav(props.id));
    };

    return (
        <Card style={{ marginBottom: "1rem" }}>
            <div className="favorite-item">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <button onClick={toggleFavHandler}>
                    you can take me out of here
                </button>
            </div>
        </Card>
    );
};

export default FavoriteItem;
