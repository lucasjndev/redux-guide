import CartActionTypes from "./action-types"; 

const initialState = {
    products:[],
    productsTotalPrice:0 
}

const cartReducer = (state=initialState,action)=>{
   switch (action.type) {
    case CartActionTypes.ADD_PRODUCT:
        return{
            ...initialState,
            products:[...initialState.products,action.payload]
        }
    default:
        break;
   } 
}

export default cartReducer