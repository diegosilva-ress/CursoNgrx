import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { UsuarioService } from 'src/app/services/UsuarioService';
import * as fromUsuariosAction from './usuarios.actions';

@Injectable()
export class UsuariosEffects {
  constructor(
    private actions$: Actions,
    private usuarioService: UsuarioService
  ) {}

  loadUsuarios$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromUsuariosAction.LoadUsuarios),
      mergeMap(() =>
        this.usuarioService.getUsuarios().pipe(
          map((usuarios) => ({
            type: fromUsuariosAction.UsuariosActionTypes.LOAD_USUARIOS_SUCCESS,
            payload: usuarios,
          })),
          catchError((error) =>
            of({
              type: fromUsuariosAction.UsuariosActionTypes
                .LOAD_USUARIOS_FAILURE,
              error: error.message,
            })
          )
        )
      )
    )
  );

  loadUsuario$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromUsuariosAction.LoadUsuarioById),
      mergeMap((action: any) =>
        this.usuarioService.getUsuarioById(action.id).pipe(
          map((usuario) => ({
            type: fromUsuariosAction.UsuariosActionTypes
              .LOAD_USUARIO_BY_ID_SUCCESS,
            payload: usuario,
          })),
          catchError((error) =>
            of({
              type: fromUsuariosAction.UsuariosActionTypes
                .LOAD_USUARIO_BY_ID_FAILURE,
              error: error.message,
            })
          )
        )
      )
    )
  );

  createUsuario$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromUsuariosAction.CreateUsuario),
      mergeMap((action) => {
        // Remove o id antes de enviar para o json-server
        const { id, ...usuarioSemId } = action.usuario;
        return this.usuarioService.addUsuario(usuarioSemId).pipe(
          map((usuario) =>
            fromUsuariosAction.CreateUsuarioSuccess({ payload: usuario })
          ),
          catchError((error) =>
            of(
              fromUsuariosAction.CreateUsuarioFailure({ error: error.message })
            )
          )
        );
      })
    )
  );

  updateUsuario$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromUsuariosAction.UpdateUsuario),
      mergeMap((action) =>
        this.usuarioService.updateUsuario(action.usuario).pipe(
          map((usuario) =>
            fromUsuariosAction.UpdateUsuarioSuccess({ payload: usuario })
          ),
          catchError((error) =>
            of(
              fromUsuariosAction.UpdateUsuarioFailure({ error: error.message })
            )
          )
        )
      )
    )
  );

deleteUsuario$ = createEffect(() =>
  this.actions$.pipe(
    ofType(fromUsuariosAction.DeleteUsuario),
    mergeMap((action) =>
      this.usuarioService.deleteUsuario(action.id).pipe(
        map(() =>
          fromUsuariosAction.DeleteUsuarioSuccess({ payload: action.id })
        ),
        catchError((error) =>
          of(
            fromUsuariosAction.DeleteUsuarioFailure({ error: error.message })
          )
        )
      )
    )
  )
);
}
