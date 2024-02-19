import { Action, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { Usuario } from "../../models/usuario.model";
import * as fromUsuarioAction from "../usuario/usuario.actions";

export interface UsuarioState {
  usuarios: Usuario[],
  usuario: Usuario | null,
  error: string | ''
}

export const initialState: UsuarioState = {
  usuarios: [],
  usuario: null,
  error: ''
}

const _usuarioReducer = createReducer(
  initialState,
  on(fromUsuarioAction.loadUsuariosSuccess, (state, { payload }) => ({
    ...state,
    usuarios: payload,
    error: '' })),
  on(fromUsuarioAction.loadUsuariosFail, (state, { erro }) => ({
    ...state,
    error: erro })),

  on(fromUsuarioAction.loadUsuarioSuccess, (state, { payload }) => ({
    ...state,
    usuario: payload,
    error: '' })),

  on(fromUsuarioAction.loadUsuarioFail, (state, { erro }) => ({
    ...state,
    error: erro })),

  on(fromUsuarioAction.createUsuarioSuccess, (state, { payload }) => ({
    ...state,
    usuarios: [...state.usuarios, payload],
    error: '' })),

  on(fromUsuarioAction.createUsuarioFail, (state, { erro }) => ({
    ...state,
    error: erro })),

  on(fromUsuarioAction.updateUsuarioSuccess, (state, { payload }) => ({
    ...state,
    usuarios: [...state.usuarios].map((row) => {
      if(row.id == payload.id){
        return payload
      }
      else{
        return row
      }
    }),
    error: '' })),

  on(fromUsuarioAction.loadUsuarioFail, (state, { erro }) => ({
    ...state,
    error: erro })),

  on(fromUsuarioAction.deleteUsuarioSuccess, (state, { payload }) => ({
    ...state,
    usuarios: [...state.usuarios].filter((filter) => filter.id != payload),
    error: '' })),

  on(fromUsuarioAction.deleteUsuarioFail, (state, { erro }) => ({
    ...state,
    error: erro })),
)


export function usuarioReducer(state= initialState, action: Action) {
  return _usuarioReducer(state, action);
}


