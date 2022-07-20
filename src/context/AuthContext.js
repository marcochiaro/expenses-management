import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useContext, useState } from "react";
import { auth } from "../firebase/firebaseConfig";

//Creacion de contexto o estado global
const AuthContext = React.createContext();

//Creando Provider
const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  //Creamos un state para comprobar cuando se termina de cargar la comprobacion de onAuthStateChanged
  const [loadingUser, setLoadingUser] = useState(true);

  useEffect(() => {
    //onAuthStateChanged, metodo de firebase que muestra el user actualemente loggeado y si se deslogea.
    const cancelarSuscripcion = onAuthStateChanged(auth, (usuario) => {
      setUser(usuario);
      //Una vez loggeado el usuario, el valor de loadingUser se vuelve false, para comprobar luego abajo en la linea 26
      setLoadingUser(false);
    });
    return cancelarSuscripcion;
  }, []);

  return (
    <AuthContext.Provider value={{ usuario: user }}>
      {/* Cuando ya se loggeo el usuario, es decir, cuando loadingUser es falso, renderizamos los childrens. Nos aseguramos de no cargar el resto de la app hasta que el user no este logged  */}
      {!loadingUser && children}
    </AuthContext.Provider>
  );
};

//Hook personalizado para acceder al contexto directamente con el hook, en vez de usar useContext(AuthContext)
const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthContextProvider, AuthContext, useAuth };
