import { TOGGLE_FAV, DUPLICATE, CREATE } from "../actions/products";

const initialState = {
    products: [
        {
            id: "p1",
            title: "Red Scarf",
            description: "A pretty red scarf.",
            isFavorite: false,
        },
        {
            id: "p2",
            title: "Blue T-Shirt",
            description: "A pretty blue t-shirt.",
            isFavorite: false,
        },
        {
            id: "p3",
            title: "Green Trousers",
            description: "A pair of lightly green trousers.",
            isFavorite: false,
        },
        {
            id: "p4",
            title: "Orange Hat",
            description: "Street style! An orange hat.",
            isFavorite: false,
        },
    ],
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAV:
            const prodIndex = state.products.findIndex(
                (p) => p.id === action.productId
            );
            const newFavStatus = !state.products[prodIndex].isFavorite;
            const updatedProducts = [...state.products];
            updatedProducts[prodIndex] = {
                ...state.products[prodIndex],
                isFavorite: newFavStatus,
            };
            return {
                ...state,
                products: updatedProducts,
            };
        case DUPLICATE:
            const productIndex = state.products.findIndex(
                (p) => p.id === action.id
            );
            const duplicatedItem = {
                ...state.products[productIndex],
                id: `p${Math.random()}`,
            };
            return {
                ...state,
                products: state.products.concat(duplicatedItem),
            };
        case CREATE:
            const newGar = { ...action.garment, id: `p${Math.random()}` };
            console.log("llegóa al reducer" + action.garment);
            return {
                ...state,
                products: state.products.concat(newGar),
            };
        default:
            return state;
    }
};

export default productReducer;
