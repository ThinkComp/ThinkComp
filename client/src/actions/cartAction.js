import axios from "axios"

export const intializeCartState = () => async dispatch => {
    const { data } = await axios.get("/api/v1/cart")
    dispatch({ type: "INITIALIZE_CART_STATE", payload: data.products.length })

}