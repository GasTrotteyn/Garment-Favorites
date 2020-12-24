export const TOGGLE_FAV = "TOGGLE_FAV";
export const DUPLICATE = "DUPLICATE";
export const CREATE = "CREATE";

export const toggleFav = (id) => {
    return { type: TOGGLE_FAV, productId: id };
};

export const duplicate = (id) => {
    return { type: DUPLICATE, id: id };
};

export const create = (newGarment) => {
    return { type: CREATE, garment: newGarment };
};
