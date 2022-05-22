
import {
    AUTH_LOADING,
    AUTH_UPDATE,
    AUTH_LOGOUT,
    AUTH_FAIL,
} from './Types'



export const setLogin = (data) => {

    return (dispatch) => {
        try {
            dispatch(authLoading(true))
            dispatch(authUpdate(data))
            dispatch(authLoading(false))

        } catch (error) {
            dispatch(authLoading(false))
            dispatch(authFail(error))
        }
    }
}
export const setLogout = () => {
    return (dispatch) => {
        try {

            dispatch(authLogout())
            dispatch(authLoading(false))
        } catch (error) {
            dispatch(authLoading(false))
            dispatch(authFail(error))
        }
    }
}

export const authLogout = () => {
    return {
        type: AUTH_LOGOUT,
    }
}
export const authLoading = (data) => {
    return {
        type: AUTH_LOADING,
        payload: data,
    }
}
export const authUpdate = (data) => {
    return {
        type: AUTH_UPDATE,
        payload: data,
    }
}
export const authFail = (data) => {
    return {
        type: AUTH_FAIL,
        payload: data,
    }
}

export const setAdminMode = (data) => {
    return (dispatch) => {
        try {
            dispatch(authLoading(true))
            dispatch(authUpdate({ isAdminMode: data }))

            dispatch(authLoading(false))

        } catch (error) {
            dispatch(authLoading(false))
            dispatch(authFail(error))
        }
    }
}