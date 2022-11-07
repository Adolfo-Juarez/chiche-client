import source from './config.json'
import axios from "axios";

export async function authenticate (username, password ){
    let response = await axios.post(`${source.host}user/${username}`,
    {
        password:password
    })

    console.log(response)
}

export async function register(username, email, password){
    let response = await axios.post(`${source.host}user`,{
        username:username,
        email:email,
        password:password
    })

    localStorage.setItem("user", JSON.stringify(response.data))

    return response.data
}

export function isAuthenticated (){
    let user = localStorage.getItem("user")
    if(user == null){
        return false
    }

    return JSON.parse(user).logged

}