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
      ofType(fromUsuariosAction.UsuariosActionTypes.LOAD_USUARIOS),
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
      ofType(fromUsuariosAction.UsuariosActionTypes.LOAD_USUARIO_BY_ID),
      mergeMap((action: any) =>
        this.usuarioService.getUsuarioById(action.payload).pipe(
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
      ofType(fromUsuariosAction.UsuariosActionTypes.CREATE_USUARIO),
      mergeMap((action: any) =>
        this.usuarioService.addUsuario(action.payload).pipe(
          map((usuario) => ({
            type: fromUsuariosAction.UsuariosActionTypes.CREATE_USUARIO_SUCCESS,
            payload: usuario,
          })),
          catchError((error) =>
            of({
              type: fromUsuariosAction.UsuariosActionTypes
                .CREATE_USUARIO_FAILURE,
              error: error.message,
            })
          )
        )
      )
    )
  );

  updateUsuario$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromUsuariosAction.UsuariosActionTypes.UPDATE_USUARIO),
      mergeMap((action: any) =>
        this.usuarioService.updateUsuario(action.payload).pipe(
          map((usuario) => ({
            type: fromUsuariosAction.UsuariosActionTypes.UPDATE_USUARIO_SUCCESS,
            payload: usuario,
          })),
          catchError((error) =>
            of({
              type: fromUsuariosAction.UsuariosActionTypes
                .UPDATE_USUARIO_FAILURE,
              error: error.message,
            })
          )
        )
      )
    )
  );

  deleteUsuario$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromUsuariosAction.UsuariosActionTypes.DELETE_USUARIO),
      mergeMap((action: any) =>
        this.usuarioService.deleteUsuario(action.payload).pipe(
          map((usuario) => ({
            type: fromUsuariosAction.UsuariosActionTypes.DELETE_USUARIO_SUCCESS,
            payload: usuario,
          })),
          catchError((error) =>
            of({
              type: fromUsuariosAction.UsuariosActionTypes
                .DELETE_USUARIO_FAILURE,
              error: error.message,
            })
          )
        )
      )
    )
  );
}
