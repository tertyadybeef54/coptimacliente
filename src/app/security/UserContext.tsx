import { createContext } from "react";
import { propUsuario } from "../models/MyInterfaces";

export const UserContext = createContext<propUsuario | null>(null);