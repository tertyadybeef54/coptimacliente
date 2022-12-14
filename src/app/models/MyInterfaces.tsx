import MyLogin from "./MyLogin";

export interface propSesion { children: React.ReactNode; }

export type propUsuario = { autenticado: MyLogin; actualizar: (usu: MyLogin) => void; };