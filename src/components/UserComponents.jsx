import React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "../redux/store";
import { GetUsers, receiveusererror, receiveuserresponse, senduserrequest } from "../redux/user/userActions";
import axios from "axios";




const UserComponents = () => {

    const { loading, data, error } = useSelector(state => state)
    const dispatch = useDispatch()



    const handleGetUser = ()=>{
        dispatch(GetUsers())
    }

    return (
        <div>
            <div className=" text-center mt-4">
                <button className=" btn btn-success"onClick={handleGetUser} >دریافت کاربران</button>
            </div>
            {loading ? (
                <div className=" text-center text-secondary mt-5">
                    <div className=" spinner-border " role="status">
                        <span className=" visually-hidden">loading...</span>
                    </div>
                </div>
            ) : data.length  > 0 ? (
                <ul className=" text-center">
                    {data.map(u=>(
                        <li key={u.id}>{u.username}</li>
                    ))}
                </ul>
            ): error ? (
                <h4 className=" text-center text-danger mt-5">{error}</h4>
            ) : (
                <h4 className=" text-center text-danger mt-5">کاربران را دریافت کنید</h4>
            )}
        </div>
        
    )
}

export default UserComponents;