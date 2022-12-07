import conf from './config.json' assert {type: "json"};
import axios from 'axios'

export async function login(email, password){

    let response = axios.post(`${conf.host}user/login`,{
        email:email,
        password:password
    })

    localStorage.setItem("token",JSON.stringify((await response).data));

    return (await response).data
}

export async function register(username, email, password){
    let response = axios.post(`${conf.host}user`,{
        username:username,
        email:email,
        password:password
    })

    localStorage.setItem("token",JSON.stringify((await response).data));

    return (await response).data
}

function isAuthenticate(){
    if(!localStorage.getItem("token")){
        return false
    }

    return JSON.parse(localStorage.getItem("token")).authorized
}

console.log(isAuthenticate())