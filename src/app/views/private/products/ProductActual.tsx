import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";
import { registerLocale } from "react-datepicker";

import { ToastContainer } from "react-toastify";

import Product from "../../../models/Product";
import ApiBack from "../../../utilities/domains/ApiBack";
import PrivateService from "../../../services/PrivateService";
import { useFormulario } from "../../../utilities/myHooks/useFormulario";
import { MessajeTostify } from "../../../utilities/functions/MessajeTostify";

export const ProductActual = () => {
  // Variables
  let { codigo } = useParams();
  const fechaVacia = new Date();
  type formaHtml = React.FormEvent<HTMLFormElement>;
  const [enProceso, setEnProceso] = useState<boolean>(false);
  const [todoListo, setTodoListo] = useState<boolean>(false);
  let cargaFinalizada = todoListo !== undefined;
  registerLocale("es", es);
  const [startDate, setStartDate] = useState(null);
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
  // Consultar datos del producto a modificar
  // *******************************************************************
  const obtenerUnProduct = async () => {
    const urlCargarUnProduct = ApiBack.PRODUCTS_READ + "/" + codigo;
    const productRecibido = await PrivateService.peticionGET(
      urlCargarUnProduct
    );
    objeto._id = productRecibido._id;
    objeto.nameProduct = productRecibido.nameProduct;
    objeto.priceProduct = productRecibido.priceProduct;
    objeto.dateUpdateProduct = productRecibido.dateUpdateProduct;
    objeto.presentationProduct = productRecibido.presentationProduct;
    objeto.addressProduct = productRecibido.addressProduct;
    objeto.nameStore = productRecibido.nameStore;
    objeto.stateProduct = productRecibido.stateProduct;

    if (productRecibido) {
      setTodoListo(true);
    }
  };
  // *******************************************************************

  const enviarFormulario = async (fh: formaHtml) => {
    fh.preventDefault();
    setEnProceso(true);
    const fromulario = fh.currentTarget;

    fromulario.classList.add("was-validated");
    if (fromulario.checkValidity() === false) {
      fh.preventDefault();
      fh.stopPropagation();
    } else {
      const urlActualizar = ApiBack.PRODUCTS_UPDATE + "/" + objeto._id;
      objeto.nameProduct = nameProduct;

      const resultado = await PrivateService.peticionPUT(urlActualizar, objeto);

      if (resultado.nuevo) {
        setEnProceso(false);
        MessajeTostify("success", "Producto actualizado correctamente", 6000);
      } else {
        MessajeTostify(
          "error",
          "No se puede actualizar el Producto. Es posible que el nombre ya exista en la base de datos",
          6000
        );
      }
    }
  };

  useEffect(() => {
    obtenerUnProduct();
  },[]);

  return (
    <main id="main" className="main">
      <div>
        {/* Navegación estilo breadcrumb: Inicio */}
        <div className="pagetitle">
          <h1>Productos</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/dashboard">Inicio</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/dashboard/admprofile">
                  Administración de Productos
                </Link>
              </li>
              <li className="breadcrumb-item active">Actualizar</li>
            </ol>
          </nav>
        </div>
        {/* Navegación estilo breadcrumb: Fin */}
        {/* Ejemplo de formulario: Inicio */}
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Formulario de edición</h5>
              {cargaFinalizada ? (
                <Form
                  noValidate
                  validated={enProceso}
                  onSubmit={enviarFormulario}
                >
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

                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="priceProduct"
                  >
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

                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="addressProduct"
                  >
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
                      <Button type="submit" className="btn btn-primary">
                        Actualizar producto
                      </Button>
                    </Col>
                  </Form.Group>
                </Form>
              ) : (
                <div>Cargando información para la edición</div>
              )}
            </div>
          </div>
        </div>
        {/* Ejemplo de formulario: Fin */}

        {/* Requerido para presentar los mensajes Toast: Inicio */}
        <ToastContainer />
        {/* Requerido para presentar los mensajes Toast: Fin */}
      </div>
    </main>
  );
};
