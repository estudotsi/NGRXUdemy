import { ActionReducerMap } from "@ngrx/store";
import { UsuarioState, usuarioReducer } from "./usuario.reducer";
import { UsuariosEffects } from "./usuario.effects";

export interface Appstate{
  usuarios: UsuarioState;
}

export const appReducer: ActionReducerMap<Appstate> = {
  usuarios: usuarioReducer
}

export const appEffects = [
  UsuariosEffects
]
