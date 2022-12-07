import UserContext from "../context/UserContext";
import { useContext } from "react";

export function a (){
    console.log("HOLAs")
    console.log(useContext(UserContext))
}