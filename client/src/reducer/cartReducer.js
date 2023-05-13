
export const cartReducer = (state = { itemCount: 0 }, action) => {
    switch (action.type) {
        case "INITIALIZE_CART_STATE":
            return {
                ...state,
                itemCount: action.payload
            }
        case "ADD_TO_CART":
            return {
                ...state,
                itemCount: state.itemCount + 1
            }

        default:
            return state
    }
}