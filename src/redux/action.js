import $api, {API_URL} from "../http/axios";
import {SET_USER} from "./types";

export const registration = async (email, password) => {
    try {
        const response = await $api.post(`http://localhost:5000/api/registration`, {
            email,
            password
        })
        alert(response.data.message)
    } catch (e) {
        alert(e.response.data.message)
    }
}

export const login =  (email, password) => {
    return async dispatch => {
        try {
            const response = await $api.post(`http://localhost:5000/api/login`, {
                email,
                password
            })
            dispatch({
                type: SET_USER,
                payload: response.data.user
            })

            //console.log(response.data)
            localStorage.setItem('token', response.data.accessToken)
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}

export const checkAuth = async () => {
    try {
        const response = await $api.get(`${API_URL}/refresh`, {withCredentials: true})
        console.log(response);
        localStorage.setItem('token', response.data.accessToken);

        console.log(response.data)

    } catch (e) {
        console.log(e.response?.data?.message);
    }
}