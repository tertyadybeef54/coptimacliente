import { FC, useState } from "react";

import jwtDecode from "jwt-decode";
import MyLogin from "../models/MyLogin";
import { propSesion } from "../models/MyInterfaces";
import { UserContext } from "./UserContext";


const UserSesion: FC<propSesion> = ({ children }) => {
  let usuarioCargado = new MyLogin("", "", "");
  const actualizar = (objUsuario: MyLogin) => { setAutenticado(objUsuario); };

  if (localStorage.getItem("tokenMintic")) {
    const elToken = String(localStorage.getItem("tokenMintic"));
    try {
      const objJWTRecibido: any = jwtDecode(elToken);
      usuarioCargado = new MyLogin( objJWTRecibido.codUsuario, objJWTRecibido.correo, objJWTRecibido.perfil );
    } catch {
      console.log("Error");
    }
  }
  const [autenticado, setAutenticado] = useState<MyLogin>(usuarioCargado);

  return (
    <UserContext.Provider value={{ autenticado, actualizar }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserSesion;