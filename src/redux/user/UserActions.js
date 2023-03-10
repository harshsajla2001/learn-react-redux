import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./UserTypes"
import axios from 'axios'

export const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}
export const fetchUserSuccess = () => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: "users"
    }
}
export const fetchUserFailure = () => {
    return {
        type: FETCH_USER_FAILURE,
        payload: "error"
    }
}

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUserSuccess)
        axios.get('http://jsonplaceholder.typicode.com/users')
        .then(response => {
            const users = response.data
            dispatch(fetchUserSuccess(users))
        }).catch(error => {
            const errorMsg = error.message
            dispatch(fetchUserFailure(errorMsg))
        })

    }
}