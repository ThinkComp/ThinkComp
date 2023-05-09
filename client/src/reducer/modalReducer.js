
export const modalReducer = (state={loginModal: false}, action) => {
    switch(action.type) {
        case "TOGGLE_LOGIN_MODAL":
            return {
                ...state,
                loginModal: !state.loginModal
            }

        default:
            return state
    }
}