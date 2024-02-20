import { createAction, props } from "@ngrx/store";
import { Usuario } from "../../models/usuario.model";

export const enum usuariosTypeActions{
  LOAD_USUARIOS = '[LOAD_USUARIOS] LOAD USUARIOS',
  LOAD_USUARIOS_SUCCESS = '[LOAD_USUARIOS_SUCCESS] LOAD USUARIOS SUCCESS',
  LOAD_USUARIOS_FAIL = '[LOAD_USUARIOS_FAIL] LOAD USUARIOS FAIL',

  LOAD_USUARIO = '[LOAD_USUARIO] LOAD USUARIO',
  LOAD_USUARIO_SUCCESS = '[LOAD_USUARIO_SUCCESS] LOAD USUARIO SUCCESS',
  LOAD_USUARIO_FAIL = '[LOAD_USUARIO_FAIL] LOAD USUARIO FAIL',

  CREATE_USUARIO = '[CREATE_USUARIO] CREATE USUARIO',
  CREATE_USUARIO_SUCCESS = '[CREATE_USUARIO_SUCCESS] CREATE USUARIO SUCCESS',
  CREATE_USUARIO_FAIL = '[CREATE_USUARIO_FAIL] CREATE USUARIO FAIL',

  UPDATE_USUARIO = '[UPDATE_USUARIO] UPDATE USUARIO',
  UPDATE_USUARIO_SUCCESS = '[UPDATE_USUARIO_SUCCESS] UPDATE USUARIO SUCCESS',
  UPDATE_USUARIO_FAIL = '[UPDATE_USUARIO_FAIL] UPDATE USUARIO FAIL',

  DELETE_USUARIO = '[DELETE_USUARIO] DELETE USUARIO',
  DELETE_USUARIO_SUCCESS = '[DELETE_USUARIO_SUCCESS] DELETE USUARIO SUCCESS',
  DELETE_USUARIO_FAIL = '[DELETE_USUARIO_FAIL] DELETE USUARIO FAIL',
}

export const loadUsuarios = createAction( usuariosTypeActions.LOAD_USUARIOS );

export const loadUsuariosSuccess = createAction( usuariosTypeActions.LOAD_USUARIOS_SUCCESS, props<{ payload: Usuario[]}>() );

export const loadUsuariosFail = createAction( usuariosTypeActions.LOAD_USUARIOS_FAIL, props<{ erro: string}>() );

export const loadUsuario = createAction( usuariosTypeActions.LOAD_USUARIO, props<{ payload: number }> );

export const loadUsuarioSuccess = createAction( usuariosTypeActions.LOAD_USUARIO_SUCCESS, props<{ payload: Usuario}>() );

export const loadUsuarioFail = createAction( usuariosTypeActions.LOAD_USUARIO_FAIL, props<{ erro: string}>() );

export const createUsuario = createAction( usuariosTypeActions.CREATE_USUARIO, props<{ payload: Usuario }>() );

export const createUsuarioSuccess = createAction( usuariosTypeActions.CREATE_USUARIO_SUCCESS, props<{ payload: Usuario}>() );

export const createUsuarioFail = createAction( usuariosTypeActions.CREATE_USUARIO_FAIL, props<{ erro: string}>() );

export const updateUsuario = createAction( usuariosTypeActions.UPDATE_USUARIO, props<{ payload: Usuario }> );

export const updateUsuarioSuccess = createAction( usuariosTypeActions.UPDATE_USUARIO_SUCCESS, props<{ payload: Usuario}>() );

export const updateUsuarioFail = createAction( usuariosTypeActions.UPDATE_USUARIO_FAIL, props<{ erro: string}>() );

export const deleteUsuario = createAction( usuariosTypeActions.DELETE_USUARIO, props<{ payload: number }> );

export const deleteUsuarioSuccess = createAction( usuariosTypeActions.DELETE_USUARIO_SUCCESS, props<{ payload: number}>() );

export const deleteUsuarioFail = createAction( usuariosTypeActions.DELETE_USUARIO_FAIL, props<{ erro: string}>() );
