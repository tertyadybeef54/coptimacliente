export const Welcome = () => {
    return (
      <main id="main" className="main">
        <div className="col-lg-11 mx-auto p-4 py-md-5">
          <header className="d-flex align-items-center pb-3 mb-5 border-bottom">
            <i
              className="bi bi-shop fa-2xl"
              style={{ color: "#123399" }}
            ></i>
            <span className="fs-4"> &nbsp; Bienvenido al sistema</span>
          </header>
  
          <main>
            <h1>Compra Optima</h1>
            <p className="fs-5">
              Es una plataforma que te permite encontrar la tienda que tiene el precio mas bajo del producto que buscas.
              
              <br />
              <small className="text-danger">
                Todo usuario que crea una cuenta se le asignará el perfil de invitado, para modificarlo debe ser autorizado por el Administrador.
              </small>
            </p>
          </main>
        </div>
      </main>
    );
  };