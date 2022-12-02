import '../assets/stylesheets/VistaAdministrador.css'
import axios from "axios";
import React, { Component, useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const url = "http://localhost:8080/";

function VistaAdministrador() {

  /*state={
    data:[],
  }

  const data = useState([])


 peticionGet=()=>{
    axios.get(`${url}cake`).then(response=>{
      this.state.data.push(response.data)
      console.log(this.state.data)
    })
  }

  /*componentDidMount() {
    this.peticionGet();
  }*/

  const [posts, setpots] = useState([]);
  /* const [] = useState([]) */
  const {id}=useParams();

  useEffect(() => {
    axios.get(`${url}cake`)
      .then(({ data }) => {
      
        setpots(data);
      })
  })

  const borrar = (id) => {
            axios.delete(`http://localhost:8080/cake/${id}`)
              .then(({ data }) => {
                console.log(data);
                setpots(data);
              })
          
         
}

return (
  <>
    <div className="container">
      <div className="row">
        <div className="col">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Biscuit</th>
                <th>Filling</th>
                <th>Coverage</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>

              {posts.map(cakes => {
               
                return (

                  <>
                    <tr>
                      <td>{cakes.id}</td>
                      <td>{cakes.biscuit}</td>
                      <td>{cakes.filling}</td>
                      <td>{cakes.coverage}</td>
                      <td className='botones'>
                        <button type="button" className="btn btn-danger" onClick={()=>borrar(cakes.id)}>Eliminar</button>
                      </td>
                    </tr>
                  </>
                )
              })}

            </tbody>
          </table>
        </div>
      </div>
    </div>
  </>
)

}

export default VistaAdministrador