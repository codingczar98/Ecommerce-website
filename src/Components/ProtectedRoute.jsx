import React from 'react'
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = (props) => {
    const {Comp,...rest}=props
    let user=localStorage.getItem("user");
    if(user){
        return <Comp {...rest}/>
    }
    else{
        return <Navigate to="/login"/>
    }

}      




