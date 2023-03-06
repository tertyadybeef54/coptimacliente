import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { ToastContainer } from "react-toastify";

import Pozo from "../../../models/Pozo";
import ApiBack from "../../../utilities/domains/ApiBack";
import PrivateService from "../../../services/PrivateService";
import { obtenerFechaLocal } from "../../../utilities/functions/FormatoFecha";

export const Pozos = () => {
  // ************************************************************************
  const [arregloPozos, setArregloPozos] = useState<Pozo[]>([]);
  const [mutable, setMutable] = useState<Pozo[]>([]);
  const [search, setSearch] = useState("");
  // ************************************************************************


  // **************************************************************************

  // ************************************************************************
  const obtenerPozos = async () => {
    const resultado = await PrivateService.peticionGET2(
      ApiBack.POZOS
    );
    setArregloPozos(resultado);
    setMutable(resultado);
  };
  // ************************************************************************


  const filtrar = (buscar: string)=>{
    var resultadoBusqueda = arregloPozos.filter((elemento)=>{
      return elemento.nombrePozo.toLowerCase().includes(buscar.toLowerCase()) || elemento.operadora.toLowerCase().includes(buscar.toLowerCase());
    });
    console.log(resultadoBusqueda);
    setMutable(resultadoBusqueda);
  }


  // ************************************************************************
  useEffect(() => {
    obtenerPozos();
  }, []);
  // ************************************************************************

  
  return (
    <main id="main" className="main">
      {/* Navegación estilo breadcrumb: Inicio */}
      <div className="pagetitle">
        <h1>Pozoos</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/dashboard">Inicio</Link>
            </li>
            <li className="breadcrumb-item active">
              Listado de productos
            </li>
          </ol>
        </nav>
      </div>
      {/* Navegación estilo breadcrumb: Fin */}

      {/* Ejemplo de una tabla para presentación de datos: Inicio */}
      <div className="col-lg-12">
        <div className="card">
          <div className="card-body">
          <br />
          <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Buscar por nombre de producto o de tienda"
                aria-label="Search"
                value={search}
                onChange = {(e)=>{setSearch(e.target.value); filtrar(e.target.value)}}
              />
            </form>


            <table className="table table-striped">
              <thead>
                <tr>
                <th className="text-center" style={{ width: "5%" }}>Nro</th>
                  <th style={{ width: "20%" }}>Nombre</th>
                  <th style={{ width: "20%" }}>operadora</th>
                  <th style={{ width: "20%" }}>ubicacion</th>
                  <th style={{ width: "20%" }}>comentario</th>
                </tr>
              </thead>
              <tbody>
                {mutable.map((miProd, indice) => (
                  <tr key={indice}>
                    <td className="text-center">{indice + 1}</td>
                    <td>{miProd.nombrePozo}</td>
                    <td>{miProd.operadora}</td>
                    <td>{miProd.ubicacion}</td>
                    <td>{miProd.comentario}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* *********************************************************************************/}
          </div>
        </div>
      </div>
      {/* Ejemplo de una tabla para presentación de datos: Fin */}

      {/* Requerido para presentar los mensajes Toast: Inicio */}
      <ToastContainer />
      {/* Requerido para presentar los mensajes Toast: Fin */}
    </main>
  );
};