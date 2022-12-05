import * as actionTypes from "../constants/Constants";

export const ItemReducer=(state = { itemData: []},action)=>{
    switch (action.type) {
        case actionTypes.ADD_DATA:
            return{
                itemData:action.payload
            }
        case actionTypes.ADD_DATA_ERROR:
            return{
                error:action.error
            }
        default:
            return state;
    }
 }

export const CartItemReducer=(state = { cartData: []},action)=>{
    switch (action.type) {
        case actionTypes.ADD_CART_DATA:
            return{
                cartData:action.payload
            }
        case actionTypes.ADD_CART_DATA_ERROR:
            return{
                error:action.error
            }
        default:
            return state;
    }
 }

