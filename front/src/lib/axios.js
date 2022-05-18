import axios from 'axios'

const axiosfetch = async (req, loadingFunction, callback) => {
    let requestData = {
        ...req.request,
        headers: {
            requestType: req.requestType || "application/json",
            "X-CSRF-TOKEN": "CSFR-Token",
            Authorization: req.token
        },
        method: 'post',
        url: req.url || "",
        data: req.data || ""
    }

    return await axios(requestData)
        .then((res) => {
            callback(res)
            return res
        })
        .catch((error) => {
            callback(error)
            return error
        })
}


export const MAIN_API = (loadingFunction, api_address, callback, data) => {
    loadingFunction(true)
    const requestData = {
        token: localStorage.getItem('token') || '',
        url: api_address,
        data: data,
    }
    axiosfetch(requestData, loadingFunction, (res) => {
        if (res.status === 200) {
            loadingFunction(false)
            callback({
                data: res.data,
            })
        } else {
            loadingFunction(false)
            callback({
                error: true,
            })
        }
    })
}