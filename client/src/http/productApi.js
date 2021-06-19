import { setAllProductInBasket, setProductInBasketAC } from "../store/basketReducer"
import { setProductAC, setTypeAC } from "../store/productReducer"
import { $authHost, $host } from "./indexHttp"

export const getTypes = () => {
    return async (dispatch) => {
        const { data } = await $host.get(`srv/type`)
        dispatch(setTypeAC(data.rows))
    }
}

export const getProductInProductStore = () => {
    return async (dispatch) => {
        const { data } = await $host.get(`srv/product`)
        dispatch(setProductAC(data.rows))
    }
}
export const getProductInBasketStore = () => {
    return async (dispatch) => {
        const { data } = await $host.get(`srv/product`)
        dispatch(setAllProductInBasket(data.rows))
    }
}
export const getOneProduct = async (id) => {
    const { data } = await $authHost.get('srv/product/' + id)
    return data
}
export const addProductInBasket = async (basketProduct) => {
    const data = await $authHost.post('srv/basketProduct', basketProduct)
    return data
}
export const deleteProductOfBasket = async (basketProduct) => {
    const data = await $authHost.post(`srv/basketProduct/delete`, basketProduct)
    return data
}
export const getProductOfBasket = (basketId) => {
    return async (dispatch) => {
        const { data } = await $authHost.get(`srv/basketProduct?basketId=${basketId}`)
        dispatch(setProductInBasketAC(data.rows))
        
    }
}
export const getProductOfBasketHook = async (basketId) => {
    const { data } = await $authHost.get(`srv/basketProduct?basketId=${basketId}`)
    return data.rows


}
