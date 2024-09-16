import { createContext } from "react";
import { IContext } from "./model";

export const AppContext = createContext<IContext>(null as any)