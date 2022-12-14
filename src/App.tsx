import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { RoutingComplete } from "./app/utilities/routes/RoutingComplete";

const cargando = (
  <div className="spinner-border text-primary" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={cargando}>
          <RoutingComplete />
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;