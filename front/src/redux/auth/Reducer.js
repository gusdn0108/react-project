import {
    AUTH_LOADING,
    AUTH_UPDATE,
    AUTH_LOGOUT,
    AUTH_FAIL,

} from './Types'
const initialState = {
    isLoading: false,
    isStart: false,
    failData: null,
    isLogin: false,
    isAdmin: false,
    username: "",
    email: "",
    profilePicture: "",
    coverPicture: "",
    followers: "",
    followings: "",
    desc: "",
    city: "",
    from: "",
    date: "",
    relationship: "",

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_LOADING:
            return {
                ...state,
                isLoading: action.payload,
            }
        case AUTH_UPDATE:
            return {
                ...state,
                isStart: true,
                isLogin: true,
                ...action.payload,
            }
        case AUTH_LOGOUT:
            localStorage.removeItem("token");
            return { ...initialState, isStart: true }
        case AUTH_FAIL:
            return {
                ...state,
                failData: action.payload,
            }

        default: return state
    }
}

export default reducer