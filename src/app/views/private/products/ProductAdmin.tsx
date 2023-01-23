import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";

import { ToastContainer } from "react-toastify";

import Product from "../../../models/Product";
import ApiBack from "../../../utilities/domains/ApiBack";
import PrivateService from "../../../services/PrivateService";
import { MessajeTostify } from "../../../utilities/functions/MessajeTostify";
import { obtenerFechaLocal } from "../../../utilities/functions/FormatoFecha";

export const ProductAdmin = () => {
  // ************************************************************************
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [objUsu, setObjUsu] = useState<Product>( new Product("", "", 0, new Date(), "", "", "", 0 ) );
  const [arregloProducts, setArregloProducts] = useState<Product[]>([]);
  const [mutable, setMutable] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  // ************************************************************************


  // Eliminar producto
  // **************************************************************************
  const borrarProduct = async (codigoProduct: string) => {
    const urlBorrar = ApiBack.PRODUCTS_DELETE + "/" + codigoProduct;
    const resultado = await PrivateService.peticionDELETE(urlBorrar);
    console.log(resultado);
    if (typeof resultado.eliminado === "undefined") {
      MessajeTostify("error", "No se puede eliminar el Producto.", 7000);
    } else {
      MessajeTostify( "success", "Producto " + objUsu.nameProduct + " ha sido eliminado", 6000 );
    }
    obtenerProducts();
  };
  // **************************************************************************


  // ************************************************************************
  const obtenerProducts = async () => {
    const resultado = await PrivateService.peticionGET(
      ApiBack.PRODUCTS_ALL
    );
    setArregloProducts(resultado);
    setMutable(resultado);
  };
  // ************************************************************************

  const filtrar = (buscar: string)=>{
    var resultadoBusqueda = arregloProducts.filter((elemento)=>{
      return elemento.nameProduct.toLowerCase().includes(buscar.toLowerCase()) || elemento.nameStore.toLowerCase().includes(buscar.toLowerCase());
    });
    console.log(resultadoBusqueda);
    setMutable(resultadoBusqueda);
  }

  // ************************************************************************
  useEffect(() => {
    obtenerProducts();
  }, []);
  // ************************************************************************

  
  return (
    <main id="main" className="main">
      {/* Navegación estilo breadcrumb: Inicio */}
      <div className="pagetitle">
        <h1>Productos</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/dashboard">Inicio</Link>
            </li>
            <li className="breadcrumb-item active">
              Administración de Productos
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
                  <th style={{ width: "15%" }}>Nombre</th>
                  <th style={{ width: "10%" }}>Precio</th>
                  <th style={{ width: "10%" }}>Fecha</th>
                  <th style={{ width: "16%" }}>Presentación</th>
                  <th style={{ width: "14%" }}>Tienda</th>
                  <th style={{ width: "20%" }}>Dirección</th>
                  <th style={{ width: "10%" }}> </th>
                </tr>
              </thead>
              <tbody>
                {mutable.map((miProd, indice) => (
                  <tr key={indice}>
                    <td className="text-center">{indice + 1}</td>
                    <td>{miProd.nameProduct}</td>
                    <td>{miProd.priceProduct}</td>
                    <td>
                      {obtenerFechaLocal(miProd.dateUpdateProduct)}
                    </td>
                    <td>{miProd.presentationProduct}</td>
                    <td>{miProd.nameStore}</td>
                    <td>{miProd.addressProduct}</td>
                    <td className="text-center align-middle">
                      
                      <a
                        href="/#"
                        onClick={(e) => {
                          e.preventDefault();
                          setShow(true);
                          setObjUsu(miProd);
                        }}
                      >
                        <i
                          className="fa-solid fa-trash-can fa-sm"
                          style={{ color: "#990000" }}
                        ></i>
                      </a>{" "}
                      <Link to={"/dashboard/updatep/" + miProd._id}>
                        <i
                          className="fa-regular fa-pen-to-square"
                          style={{ color: "#006600" }}
                        ></i>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Modal para eliminar */}
            {/* *********************************************************************************/}
            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>Eliminar perfil</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                ¿Realmente desea eleminar el producto?
                <br />
                <strong>
                  {objUsu.nameProduct} - {objUsu.nameStore}
                </strong>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  variant="secondary"
                  onClick={(e) => {
                    setShow(false);
                  }}
                >
                  Cancelar
                </Button>
                <Button
                  variant="danger"
                  onClick={(e) => {
                    borrarProduct(objUsu._id);
                    setShow(false);
                  }}
                >
                  Eliminar
                </Button>
              </Modal.Footer>
            </Modal>
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