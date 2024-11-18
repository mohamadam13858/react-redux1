import { RECEIVE_USER_ERROR, RECEIVE_USER_RESPONSE, SEND_USER_REQUEST } from "./userTypes"
import axios from "axios"



export const senduserrequest = ()=>{
    return{
        type: SEND_USER_REQUEST
    }
}


export const receiveuserresponse = (data)=>{
    return{
        type: RECEIVE_USER_RESPONSE,
        payload: data
    }
}


export const receiveusererror = (error)=>{
    return{
        type: RECEIVE_USER_ERROR , 
        payload: error
    }
}

export const GetUsers = ()=>{
    return(dispatch)=>{
        dispatch(senduserrequest())
        axios.get(`https://jsonplaceholder.typicode.com/users`).then(res=>{
            dispatch(receiveuserresponse(res.data))
        }).catch(error=>{
            dispatch(receiveusererror(error.massage))
        })
    }
}