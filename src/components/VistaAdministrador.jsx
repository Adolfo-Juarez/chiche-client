import '../assets/stylesheets/VistaAdministrador.css'
import axios from "axios";
import React, { Component, useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';

/* 1-ARREGLAR EL CSS DEL FOOTER Y LIMPIAR LOS COMNENTARIOS DEL HEADER 
   2.-BORRAR EL COMPONENTE PROVIDER
      DEL MAIN*/

const url = "http://localhost:8080/";

function VistaAdministrador() {

  const [posts, setpots] = useState([]);
  const {id}=useParams();

  //Metodo Mostrar -->

  useEffect(() => {
    axios.get(`${url}cake`)
      .then(({ data }) => {
      
        setpots(data);
      })
  })

  //Metodo Borrar -->
  
  const borrar = (id) => {
            axios.delete(`http://localhost:8080/cake/${id}`)
              .then(({ data }) => {
                console.log(data);
                setpots(data);
              })
}

  /* TRATAR DE HACER RESPONSIVE EL CRUD */

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
                <th>Design</th>
                <th>Shape</th>
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
                      <td>{cakes.design}</td>
                      <td>{cakes.shape}</td>
                      <td className='botones'>
                        <button type="button" className="btn btn-danger" onClick={()=>borrar(cakes.id)}>Finalizar</button>
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