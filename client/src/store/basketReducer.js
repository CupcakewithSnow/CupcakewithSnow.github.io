const SET_PRODUCT_IN_BASKET = 'SET_PRODUCT_IN_BASKET'
const SET_ALL_PRODUCT = 'SET_ALL_PRODUCT'
const defaultState = {
    basket: [],
    product:[]

}
export default function basketReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_PRODUCT_IN_BASKET:
            return {
                ...state,
                basket: action.products
            }
        case SET_ALL_PRODUCT:
            return {
                ...state,
                product: action.product
            }
        default:
            return state
    }
}
export const setProductInBasketAC = (products) => {
    return { type: SET_PRODUCT_IN_BASKET, products }
}
export const setAllProductInBasket = (product) => {
    return {type:SET_ALL_PRODUCT,product}
}

