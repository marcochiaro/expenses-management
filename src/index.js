import React from "react";
import App from "./App";
import ReactDOM from "react-dom/client";
import "./index.css";
import WebFont from "webfontloader";
import Contenedor from "./elements/Contenedor";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditarGastos from "./components/EditarGastos";
import GastosPorCategoria from "./components/GastosPorCategoria";
import InicioSesion from "./components/InicioSesion";
import ListaDeGastos from "./components/ListaDeGastos";
import RegistroDeUsuarios from "./components/RegistroUsuarios";
import { Helmet } from "react-helmet";
import favicon from "./imagenes/logo.png";
import Fondo from "./elements/Fondo";
import { AuthContextProvider } from "./context/AuthContext.js";
import RutaPrivada from "./components/RutaPrivada";

WebFont.load({
  google: {
    families: ["Work Sans:400,500,700", "sans-serif"],
  },
});

const Index = () => {
  return (
    <>
      <Helmet>
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />
      </Helmet>
      <AuthContextProvider>
        <BrowserRouter>
          <Contenedor>
            <Routes>
              <Route path="/iniciar-sesion" element={<InicioSesion />} />
              <Route path="/crear-cuenta" element={<RegistroDeUsuarios />} />

              <Route
                path="/"
                element={
                  <RutaPrivada>
                    <App />
                  </RutaPrivada>
                }
              />

              <Route
                path="/lista"
                element={
                  <RutaPrivada>
                    <ListaDeGastos />
                  </RutaPrivada>
                }
              />

              <Route
                path="/categorias"
                element={
                  <RutaPrivada>
                    <GastosPorCategoria />
                  </RutaPrivada>
                }
              />

              <Route
                path="/editar:id"
                element={
                  <RutaPrivada>
                    <EditarGastos />
                  </RutaPrivada>
                }
              />
            </Routes>
          </Contenedor>
        </BrowserRouter>
        <Fondo />
      </AuthContextProvider>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index />);

export default Index;
