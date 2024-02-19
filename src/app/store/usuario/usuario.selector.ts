import { createFeatureSelector, createSelector } from "@ngrx/store"
import { UsuarioState } from "./usuario.reducer"

const getUsuariosFeatureState = createFeatureSelector<UsuarioState>(
  'usuarios'
)

export const getUsuarios = createSelector(
  getUsuariosFeatureState,
  (state: UsuarioState) => state.usuarios
)
export const getUsuario = createSelector(
  getUsuariosFeatureState,
  (state: UsuarioState) => state.usuario
)

export const getUsuarioErro = createSelector(
  getUsuariosFeatureState,
  (state: UsuarioState) => state.error
)

export const getUsuariosAdministradores = createSelector(
  getUsuariosFeatureState,
  (state: UsuarioState) => state.usuarios.filter(( filter ) => filter.perfil == 'Administrador')
)

export const getUsuariosMaiorCinquenta = createSelector(
  getUsuariosFeatureState,
  (state: UsuarioState) => state.usuarios.filter(( filter ) => filter.idade >= 50)
)
