import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UsuarioService } from "../../service/usuario.service";
import * as fromUsuarioAction from "../usuario/usuario.actions";
import { catchError, exhaustMap, map, of } from "rxjs";

@Injectable()

export class UsuariosEffects{

  constructor(private actions$: Actions, private usuarioService: UsuarioService) {

  }

  loadUsuarios$ = createEffect(
    () => this.actions$.pipe(
    ofType(fromUsuarioAction.usuariosTypeActions.LOAD_USUARIOS),
    exhaustMap(() => this.usuarioService.getUsuarios()
    .pipe(
      map(payload =>
        fromUsuarioAction.loadUsuariosSuccess({ payload }),
        catchError(erro => of(fromUsuarioAction.loadUsuarioFail({ erro })))
        )
      )
    )
   )
  )

  loadUsuario$ = createEffect(
    () => this.actions$.pipe(
    ofType(fromUsuarioAction.usuariosTypeActions.LOAD_USUARIO),
    exhaustMap((record: any) => this.usuarioService.getUsuario(record.payload)
    .pipe(
      map(payload =>
        fromUsuarioAction.loadUsuarioSuccess({ payload }),
        catchError((erro: any) => of(fromUsuarioAction.loadUsuarioFail({ erro })))
        )
      )
    )
   )
  )

  createUsuario$ = createEffect(
    () => this.actions$.pipe(
    ofType(fromUsuarioAction.usuariosTypeActions.CREATE_USUARIO),
    exhaustMap((record: any) => this.usuarioService.addUsuario(record.payload)
    .pipe(
      map(payload =>
        fromUsuarioAction.createUsuarioSuccess({ payload }),
        catchError(erro => of(fromUsuarioAction.loadUsuarioFail({ erro })))
        )
      )
    )
   )
  )

  updateUsuario$ = createEffect(
    () => this.actions$.pipe(
    ofType(fromUsuarioAction.usuariosTypeActions.UPDATE_USUARIO),
    exhaustMap((record: any) => this.usuarioService.updateUsuario(record.payload)
    .pipe(
      map(payload =>
        fromUsuarioAction.updateUsuarioSuccess({ payload }),
        catchError(erro => of(fromUsuarioAction.updateUsuarioFail({ erro })))
        )
      )
    )
   )
  )

  deleteUsuario$ = createEffect(
    () => this.actions$.pipe(
    ofType(fromUsuarioAction.usuariosTypeActions.DELETE_USUARIO),
    exhaustMap((record: any) => this.usuarioService.deleteUsuario(record.payload)
    .pipe(
      map(() =>
        fromUsuarioAction.deleteUsuarioSuccess({ payload: record.payload }),
        catchError(erro => of(fromUsuarioAction.deleteUsuarioFail({ erro })))
        )
      )
    )
   )
  )

}

