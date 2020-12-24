import React, { useState } from "react";
import "./GarmentCreator.css";

import Card from "../UI/Card";
import { create } from "../../store/actions/products";
import { useDispatch } from "react-redux";

const GarmentCreator = (props) => {
    const [newGarment, setNewGarment] = useState({
        title: null,
        description: null,
        isFavorite: false,
    });

    const changeInputHandler = (event, inputId) => {
        //console.log(event.target.value);
        let updatedState = { ...newGarment };
        updatedState[inputId] = event.target.value;
        setNewGarment(updatedState);
    };

    const changeCheckHandler = (event, inputId) => {
        //console.log(event.target.value);
        let updatedState = { ...newGarment };
        updatedState[inputId] = event.target.checked;
        setNewGarment(updatedState);
    };

    const dispatch = useDispatch();

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(newGarment);
        dispatch(create(newGarment));
    };

    return (
        <Card
            style={{
                margin: "3rem",
            }}
        >
            <form className="formu" onSubmit={submitHandler}>
                <h2>Create your garments</h2>
                <input
                    id="name"
                    type="text"
                    placeholder="Name"
                    onChange={(event) => changeInputHandler(event, "title")}
                ></input>
                <input
                    id="description"
                    type="text"
                    placeholder="description"
                    onChange={(event) =>
                        changeInputHandler(event, "description")
                    }
                ></input>
                <label htmlFor="isFav">Is favorite?</label>
                <input
                    type="checkbox"
                    id="isFav"
                    onChange={(event) =>
                        changeCheckHandler(event, "isFavorite")
                    }
                ></input>
                <button>Store</button>
            </form>
        </Card>
    );
};

export default GarmentCreator;
