import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { Welcome } from "../../containers/Welcome";
import { NotFound } from "../../views/share/NotFound";

import { PerfilCrear } from "../../views/private/perfiles/PerfilCrear";
import { PerfilAdmin } from "../../views/private/perfiles/PerfilAdmin";
import { PerfilListado } from "../../views/private/perfiles/PerfilListado";
import { PerfilActual } from "../../views/private/perfiles/PerfilActual";

import { UsuarioCrear } from "../../views/private/usuarios/UsuarioCrear";
import { UsuarioListado } from "../../views/private/usuarios/UsuarioListado";
import { UsuarioDetalle } from "../../views/private/usuarios/UsuarioDetalle";
import { UsuarioAdmin } from "../../views/private/usuarios/UsuarioAdmin";
import { UsuarioActual } from "../../views/private/usuarios/UsuarioActual";

import { ProductCreate } from "../../views/private/products/ProductCreate";
import { ProductAdmin } from "../../views/private/products/ProductAdmin";
import { ProductActual } from "../../views/private/products/ProductActual";
import { ProductList } from "../../views/private/products/ProductList";


// Carga Lazy - Supenso
// ***********************************************************************************************
const cargando = (
  <div className="d-flex justify-content-center">
    <div className="mt-3">
      <button className="btn btn-primary" type="button" disabled>
        <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true" ></span>
        Cargando información...
      </button>
    </div>
  </div>
);
// ***********************************************************************************************

const RecursoNoEncontrado = lazy(() => import("../../views/share/NotFound").then(() => ({ default: NotFound, })) );

const LazyBienvenida = lazy(() => import("../../containers/Welcome").then(() => ({ default: Welcome })) );

const LazyPerfilListado = lazy(() => import("../../views/private/perfiles/PerfilListado").then(() => ({ default: PerfilListado })) );
const LazyPerfilCrear = lazy(() => import("../../views/private/perfiles/PerfilCrear").then(() => ({ default: PerfilCrear })) );
const LazyPerfilAdmin = lazy(() => import("../../views/private/perfiles/PerfilAdmin").then(() => ({ default: PerfilAdmin })) );
const LazyPerfilActual = lazy(() => import("../../views/private/perfiles/PerfilActual").then(() => ({ default: PerfilActual })) );

const LazyUsuarioListado = lazy(() => import("../../views/private/usuarios/UsuarioListado").then(() => ({ default: UsuarioListado })) );
const LazyUsuarioCrear = lazy(() => import("../../views/private/usuarios/UsuarioCrear").then(() => ({ default: UsuarioCrear })) );
const LazyUsuarioDetalle = lazy(() => import("../../views/private/usuarios/UsuarioDetalle").then(() => ({ default: UsuarioDetalle })) );
const LazyUsuarioAdmin = lazy(() => import("../../views/private/usuarios/UsuarioAdmin").then(() => ({ default: UsuarioAdmin })) );
const LazyUsuarioActual = lazy(() => import("../../views/private/usuarios/UsuarioActual").then(() => ({ default: UsuarioActual })) );

const LazyProductCreate = lazy(() => import("../../views/private/products/ProductCreate").then(() => ({ default: ProductCreate })) );
const LazyProductAdmin = lazy(() => import("../../views/private/products/ProductAdmin").then(() => ({ default: ProductAdmin })) );
const LazyProductActual = lazy(() => import("../../views/private/products/ProductActual").then(() => ({ default: ProductActual })) );
const LazyProductList = lazy(() => import("../../views/private/products/ProductList").then(() => ({ default: ProductList })) );


export const RoutingBoard = () => {
  return (
    <Suspense fallback={cargando}>
      <Routes>
        <Route path="/" element={<LazyBienvenida />} />

        <Route path="/listprofiles" element={<LazyPerfilListado />} />
        <Route path="/addprofile" element={<LazyPerfilCrear />} />
        <Route path="/admprofile" element={<LazyPerfilAdmin />} />
        <Route path="/updateprofile/:codigo" element={<LazyPerfilActual />} />

        <Route path="/listusers" element={<LazyUsuarioListado />} />
        <Route path="/adduser" element={<LazyUsuarioCrear />} />
        <Route path="/detailuser/:codigo" element={<LazyUsuarioDetalle />} />
        <Route path="/admuser" element={<LazyUsuarioAdmin />} />
        <Route path="/updateuser/:codigo" element={<LazyUsuarioActual />} />

        <Route path="/addp" element={<LazyProductCreate />} />
        <Route path="/admp" element={<LazyProductAdmin />} />
        <Route path="/updatep/:codigo" element={<LazyProductActual />} />
        <Route path="/listp" element={<LazyProductList />} />

        <Route path="*" element={<RecursoNoEncontrado />} />
      </Routes>
    </Suspense>
  );
};