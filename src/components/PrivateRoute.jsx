import { useContext } from "react";
import UserContext from "../context/UserContext";
import { useNavigate, Navigate, Outlet } from "react-router-dom";

function PrivateRoute(){
    const {user} = useContext(UserContext)

    const navigate = useNavigate()

    return (user.authorized ? <Outlet/> : <Navigate to="/"/>)
}