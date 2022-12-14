import { useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { ToastContainer } from "react-toastify";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";

import Product from "../../../models/Product";
import ApiBack from "../../../utilities/domains/ApiBack";
import PrivateService from "../../../services/PrivateService";
import { useFormulario } from "../../../utilities/myHooks/useFormulario";
import { MessajeTostify } from "../../../utilities/functions/MessajeTostify";

export const ProductCreate = () => {
  // Variables
  const fechaVacia = new Date();

  registerLocale("es", es);
  const [startDate, setStartDate] = useState(null);

  type formaHtml = React.FormEvent<HTMLFormElement>;
  const [enProceso, setEnProceso] = useState<boolean>(false);
  let {
    nameProduct,
    priceProduct,
    presentationProduct,
    addressProduct,
    nameStore,
    dobleEnlace,
    objeto,
  } = useFormulario<Product>(new Product("", "", 0, fechaVacia, "", "", "", 1));
  // *******************************************************************

  // ************************************************************************

  // Función flecha para limpiar cajas
  const limpiarCajas = (formulario: HTMLFormElement) => {
    formulario.reset();
    formulario.classList.remove("was-validated");
  };
  // *******************************************************************

  // Crear la cita
  // *******************************************************************
  const enviarFormulario = async (fh: formaHtml) => {
    fh.preventDefault();
    setEnProceso(true);
    const formulario = fh.currentTarget;
    formulario.classList.add("was-validated");

    if (formulario.checkValidity() === false) {
      fh.preventDefault();
      fh.stopPropagation();
    } else {
      console.log(objeto);
      const resultado = await PrivateService.peticionPOST(
        ApiBack.PRODUCTS_CREATE,
        objeto
      );

      if (resultado.id) {
        setEnProceso(false);
        MessajeTostify("success", "Producto creado con éxito", 7000);
      } else {
        MessajeTostify("error", "No se puede registrar el producto", 7000);
      }

      limpiarCajas(formulario);
    }
  };
  // *******************************************************************
  // *******************************************************************

  return (
    <main id="main" className="main">
      <div className="pagetitle">
        <h1>Productos</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Inicio</a>
            </li>
            <li className="breadcrumb-item active">Registar producto</li>
          </ol>
        </nav>
      </div>
      {/* Navegación estilo breadcrumb: Fin */}

      {/* Ejemplo de formulario: Inicio */}
      <div className="col-lg-12">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Formulario de creación</h5>

            <Form noValidate validated={enProceso} onSubmit={enviarFormulario}>
              <Form.Group as={Row} className="mb-3" controlId="nameProduct">
                <Form.Label column sm={3}>
                  <span className="text-success">
                    <small>Nombre del producto:</small>
                  </span>
                </Form.Label>
                <Col sm={9}>
                  <Form.Control
                    size="sm"
                    required
                    type="text"
                    name="nameProduct"
                    className="form-control"
                    value={nameProduct}
                    onChange={dobleEnlace}
                  />
                  <Form.Control.Feedback type="invalid">
                    Nombre del producto es obligatorio
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="priceProduct">
                <Form.Label column sm={3}>
                  <span className="text-success">
                    <small>Precio del producto:</small>
                  </span>
                </Form.Label>
                <Col sm={9}>
                  <Form.Control
                    size="sm"
                    required
                    type="number"
                    name="priceProduct"
                    className="form-control"
                    value={priceProduct}
                    onChange={dobleEnlace}
                  />
                  <Form.Control.Feedback type="invalid">
                    Precio del producto es obligatorio
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              <div className="mb-3 row">
                <label className="col-sm-3">
                  <span className="text-success">Fecha de compra:</span>
                </label>
                <div className="col-sm-4">
                  <DatePicker
                    required
                    selected={startDate}
                    onChange={(fechaSeleccionada: any) => {
                      setStartDate(fechaSeleccionada);
                      objeto.dateUpdateProduct = fechaSeleccionada;
                    }}
                    locale="es"
                    dateFormat="dd/MM/yyyy"
                    className="form-control form-control-sm"
                    id="dateUpdateProduct"
                  />
                </div>
              </div>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="presentationProduct"
              >
                <Form.Label column sm={3}>
                  <span className="text-success">
                    <small>Presentación del producto:</small>
                  </span>
                </Form.Label>
                <Col sm={9}>
                  <Form.Control
                    size="sm"
                    required
                    type="text"
                    name="presentationProduct"
                    className="form-control"
                    value={presentationProduct}
                    onChange={dobleEnlace}
                  />
                  <Form.Control.Feedback type="invalid">
                    Presentación del producto es obligatorio
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="addressProduct">
                <Form.Label column sm={3}>
                  
                  <span className="text-success">
                    <small>Dirección de la tienda</small>
                  </span>
                </Form.Label>
                <Col sm={9}>
                  <Form.Control
                    size="sm"
                    required
                    type="text"
                    name="addressProduct"
                    className="form-control"
                    value={addressProduct}
                    onChange={dobleEnlace}
                  />
                  <Form.Control.Feedback type="invalid">
                    Dirección es obligatoria
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="nameStore">
                <Form.Label column sm={3}>
                  <span className="text-success">
                    <small>Nombre de la tienda</small>
                  </span>
                </Form.Label>
                <Col sm={9}>
                  <Form.Control
                    size="sm"
                    required
                    type="text"
                    name="nameStore"
                    className="form-control"
                    value={nameStore}
                    onChange={dobleEnlace}
                  />
                  <Form.Control.Feedback type="invalid">
                    Nombre de la tienda es obligatorio
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 9, offset: 3 }}>
                  <Button type="submit">Registrar el producto</Button>
                </Col>
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
      {/* Ejemplo de formulario: Inicio */}

      {/* Requerido para presentar los mensajes Toast: Inicio */}
      <ToastContainer />
      {/* Requerido para presentar los mensajes Toast: Fin */}
    </main>
  );
};
