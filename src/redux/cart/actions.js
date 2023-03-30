import CartActionTypes from "./action-types";

export const addProductToCart = (playload)=>({
    type:CartActionTypes.ADD_PRODUCT,
    playload
})