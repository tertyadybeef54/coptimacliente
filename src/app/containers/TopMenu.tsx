import { MouseEvent, useContext } from "react";
import { useNavigate } from "react-router-dom";

import perfilUsu from "../../assets/image/perfilUsuario.png";
import { UserContext } from "../security/UserContext";
import { OcultarMenu } from "../utilities/functions/HideMenu";

export const TopMenu = () => {
  const navegacion = useNavigate();
  const miUsuario = useContext(UserContext);
  const correoUsuario = miUsuario?.autenticado.correo;

  let avatarUsuario = String(localStorage.getItem("avatarMintic"));
  
  const cerrarSesion = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    localStorage.removeItem("tokenMintic");
    navegacion("/login");
  };

  return (
    <header id="header" className="header fixed-top d-flex align-items-center">
      <div className="d-flex align-items-center justify-content-between">
        <a href="index.html" className="logo d-flex align-items-center">
          <img src="assets/img/logo.png" alt="" />
          <span className="d-none d-lg-block">Coptima</span>
        </a>
        <i className="bi bi-list toggle-sidebar-btn" onClick={OcultarMenu}></i>
      </div>

      <nav className="header-nav ms-auto">
        <ul className="d-flex align-items-center">
          <li className="nav-item d-block d-lg-none">
            <a className="nav-link nav-icon search-bar-toggle " href="/#">
              <i className="bi bi-search"></i>
            </a>
          </li>

          <li className="nav-item dropdown pe-3">
            <a
              className="nav-link nav-profile d-flex align-items-center pe-0"
              href="/#"
              data-bs-toggle="dropdown"
            >
              <img
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src=perfilUsu;
                }}
                src={avatarUsuario}
                alt="Profile"
                className="rounded-circle"
              />
              <span className="d-none d-md-block dropdown-toggle ps-2">
                {correoUsuario}
              </span>
            </a>

            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
              <li className="dropdown-header">
                <h6>Tripulante Misión TIC</h6>
                <span>Fullstack</span>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>

              <li>
                <a
                  className="dropdown-item d-flex align-items-center"
                  href="users-profile.html"
                >
                  <i className="bi bi-person"></i>
                  <span>Mi perfil</span>
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>

              <li>
                <a
                  className="dropdown-item d-flex align-items-center"
                  href="users-profile.html"
                >
                  <i className="bi bi-gear"></i>
                  <span>Configuración</span>
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>

              <li>
                <a
                  href="/#"
                  className="dropdown-item d-flex align-items-center"
                  onClick={cerrarSesion}
                >
                  <i className="bi bi-box-arrow-right"></i>
                  Cerrar sesión
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};