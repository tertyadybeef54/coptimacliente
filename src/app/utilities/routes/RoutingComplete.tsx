import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../../views/public/Login";
import { Principal } from "../../views/public/Principal";
import { RegisterSesion } from "../../views/public/RegisterSesion";
import { NotFound } from "../../views/share/NotFound";
import { Vigilant } from "../../security/Vigilant";
import UserSesion from "../../security/UserSesion";
import { MainBoard } from "../../containers/MainBoard";
import { ProductList } from "../../views/private/products/ProductList";


const LazyPrincipal = lazy(() => import("../../views/public/Principal").then(() => ({ default: Principal })) );
const LazyInicio = lazy(() => import("../../views/public/Login").then(() => ({ default: Login, })) );
const LazyRegistro = lazy(() => import("../../views/public/RegisterSesion").then(() => ({ default: RegisterSesion, })) );
const LazyNoEncontrado = lazy(() => import("../../views/share/NotFound").then(() => ({ default: NotFound, })) );

const LazyTablero = lazy(() => import("../../containers/MainBoard").then(() => ({ default: MainBoard, })) );
const LazyProductList = lazy(() => import("../../views/private/products/ProductList").then(() => ({ default: ProductList })) );


export const RoutingComplete = () => {
  return (
    <UserSesion>
      <Routes>
      <Route path="/" element={<LazyPrincipal />} />
        <Route path="/login" element={<LazyInicio />} />
        <Route path="/register" element={<LazyRegistro />} />
        <Route path="/listp" element={<LazyProductList />} />

        <Route element={<Vigilant />}>
          <Route path="/dashboard/*" element={<LazyTablero />} />
        </Route>

        <Route path="*" element={<LazyNoEncontrado />} />
      </Routes>
    </UserSesion>
  );
};