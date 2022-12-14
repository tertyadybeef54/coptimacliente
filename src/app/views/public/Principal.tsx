import { Link } from "react-router-dom";

import "./../../../assets/css/portada.css";
import "./../../../assets/css/carousel.css";

import logo from "./../../../assets/image/icono.png";
import quienesSomos from "./../../../assets/image/quienesSomos.png";
import tecnologias from "./../../../assets/image/tecnologias.png";

import fondo03 from "./../../../assets/image/fondo03.jpg";

export const Principal = () => {
  return (
    <div>
      {/* Barra de navegación: Inicio */}
      <header>
        <nav className="navbar navbar-expand-md fixed-top bg-light">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">
              <img src={logo} alt="" /> CopTima
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/#">
                    Inicio
                  </a>
                </li>
              </ul>
              <Link to="/login">
                <span className="navbar-text">Iniciar sesión</span>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      {/* Barra de navegación: Fin */}

      <main>
        {/* Carousel: Inicio */}
        {/* *************************************************************** */}
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
              className=""
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
              className=""
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="3"
              aria-label="Slide 4"
              className=""
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={fondo03} alt="" />
              <div className="container">
                <div className="carousel-caption">
                  <h1 style={{ color: ' #2345f5 ' }}>Encuentra la tienda</h1>
                  <p>Con el precio que mas te combiene para el producto que deseas</p>
                  <p>
                    <Link to="/listp">
                      <span className="btn btn-sm btn-primary">Buscar Productos</span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* *************************************************************** */}
        {/* Carousel: Fin */}

        {/* Cuerpo página principal: Inicio */}
        {/* *************************************************************** */}
        <div className="container marketing">
          <div className="row">
            <div className="col-lg-6">
              <img
                src={quienesSomos}
                className="bd-placeholder-img rounded-circle"
                alt=""
                style={{ width: "100px", height: "auto" }}
              />

              <h2 className="fw-normal">¿Quienes somos?</h2>
              <p>Equipo multidisciplinario desarrollador de aplicaciones Web</p>
            </div>
            <div className="col-lg-6">
              <img
                src={tecnologias}
                className="bd-placeholder-img rounded-circle"
                alt=""
                style={{ width: "170px", height: "auto" }}
              />
              <h2 className="fw-normal">¿Tecnologías?</h2>
              <p>
                Desarrollo de aplicaciones Web: Mongo, Express, React y Node
              </p>
            </div>
          </div>

          <hr className="featurette-divider" />
        </div>
        {/* *************************************************************** */}
        {/* Cuerpo página principal: Fin */}

        {/* Footer: Inicio */}
        {/* *************************************************************** */}
        <div>
          <footer className="container">
            <p className="float-end">
              <a href="/#">Inicio página</a>
            </p>
            <p>
              © 2022 Andres Cuadros Sanabria.
              <br />
              Ingeniero de sistemas - UIS
              <br />
            </p>
          </footer>
        </div>
        {/* *************************************************************** */}
        {/* Footer: Fin */}
      </main>
    </div>
  );
};
