import source from './config.json'
import axios from 'axios'

export async function orderCake() {

    let biscuit = localStorage.getItem("biscuit")
    let coverage = localStorage.getItem("coverage")
    let filling = localStorage.getItem("filling")
    let design = localStorage.getItem("design")
    let shape = localStorage.getItem("shape")
    
    if (biscuit == null
        && coverage == null
        && filling == null
        && design == null
        && shape == null) {
            return 0;
    }

    if (biscuit == null
        || coverage == null
        || filling == null
        || design == null
        || shape == null) {
        alert("Ha olvidado un ingrediente, inténtelo de nuevo")
        navigate("/biscuit")
    }


    let response = await axios.post(`${source.host}cake`, {
        biscuit: biscuit,
        filling: filling,
        coverage: coverage,
        design: design,
        shape: shape,
        size: "grande"
    })

    axios.post(`${source.host}order`, {
        idCake: response.data.id,
        idUser: JSON.parse(localStorage.getItem("user")).id
    })

    localStorage.removeItem("biscuit")
    localStorage.removeItem("coverage")
    localStorage.removeItem("filling")
    localStorage.removeItem("design")
    localStorage.removeItem("shape")

    localStorage.setItem("lastOrdered",JSON.stringify(response.data))

    return await response.data

}

export function getOrders(){
   return JSON.parse(localStorage.getItem("lastOrdered"))
}