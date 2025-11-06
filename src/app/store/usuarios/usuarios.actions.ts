import { createAction, props } from '@ngrx/store';
import { UsuarioModel } from 'src/app/models/UsuarioModel';

//Define os tipos de ações disponíveis para o gerenciamento de usuários

export const enum UsuariosActionTypes {
  LOAD_USUARIOS = '[LOAD_USUARIOS] Load Usuarios',
  LOAD_USUARIOS_SUCCESS = '[LOAD_USUARIOS_SUCCESS] Load Usuarios Success',
  LOAD_USUARIOS_FAILURE = '[LOAD_USUARIOS_FAILURE] Load Usuarios Failure',

  LOAD_USUARIO_BY_ID = '[LOAD_USUARIO_BY_ID] Load Usuario By ID',
  LOAD_USUARIO_BY_ID_SUCCESS = '[LOAD_USUARIO_BY_ID_SUCCESS] Load Usuario By ID Success',
  LOAD_USUARIO_BY_ID_FAILURE = '[LOAD_USUARIO_BY_ID_FAILURE] Load Usuario By ID Failure',

  CREATE_USUARIO = '[CREATE_USUARIO] Create Usuario',
  CREATE_USUARIO_SUCCESS = '[CREATE_USUARIO_SUCCESS] Create Usuario Success',
  CREATE_USUARIO_FAILURE = '[CREATE_USUARIO_FAILURE] Create Usuario Failure',

  UPDATE_USUARIO = '[UPDATE_USUARIO] Update Usuario',
  UPDATE_USUARIO_SUCCESS = '[UPDATE_USUARIO_SUCCESS] Update Usuario Success',
  UPDATE_USUARIO_FAILURE = '[UPDATE_USUARIO_FAILURE] Update Usuario Failure',

  DELETE_USUARIO = '[DELETE_USUARIO] Delete Usuario',
  DELETE_USUARIO_SUCCESS = '[DELETE_USUARIO_SUCCESS] Delete Usuario Success',
  DELETE_USUARIO_FAILURE = '[DELETE_USUARIO_FAILURE] Delete Usuario Failure',
}

export const LoadUsuarios = createAction(UsuariosActionTypes.LOAD_USUARIOS);

//props (propriedades) são os dados que a ação carrega
export const LoadUsuariosSuccess = createAction(
  UsuariosActionTypes.LOAD_USUARIOS_SUCCESS,
  props<{ payload: UsuarioModel[] }>()
);

export const LoadUsuariosFailure = createAction(
  UsuariosActionTypes.LOAD_USUARIOS_FAILURE,
  props<{ error: string }>()
);

export const LoadUsuarioById = createAction(
    UsuariosActionTypes.LOAD_USUARIO_BY_ID
    , props<{ id: number }>()
);

export const LoadUsuarioByIdSuccess = createAction(
  UsuariosActionTypes.LOAD_USUARIO_BY_ID_SUCCESS,
  props<{ payload: UsuarioModel }>()
);

export const LoadUsuarioByIdFailure = createAction(
  UsuariosActionTypes.LOAD_USUARIO_BY_ID_FAILURE,
  props<{ error: string }>()
);

export const CreateUsuario = createAction(
    UsuariosActionTypes.CREATE_USUARIO,
    props<{ usuario: UsuarioModel }>()
);

export const CreateUsuarioSuccess = createAction(
  UsuariosActionTypes.CREATE_USUARIO_SUCCESS,
  props<{ payload: UsuarioModel }>()
);

export const CreateUsuarioFailure = createAction(
  UsuariosActionTypes.CREATE_USUARIO_FAILURE,
  props<{ error: string }>()
);

export const UpdateUsuario = createAction(
    UsuariosActionTypes.UPDATE_USUARIO,
    props<{ usuario: UsuarioModel }>()
);

export const UpdateUsuarioSuccess = createAction(
  UsuariosActionTypes.UPDATE_USUARIO_SUCCESS,
  props<{ payload: UsuarioModel }>()
);

export const UpdateUsuarioFailure = createAction(
  UsuariosActionTypes.UPDATE_USUARIO_FAILURE,
  props<{ error: string }>()
);

export const DeleteUsuario = createAction(
    UsuariosActionTypes.DELETE_USUARIO,
    props<{ id: number }>()
);

export const DeleteUsuarioSuccess = createAction(
  UsuariosActionTypes.DELETE_USUARIO_SUCCESS,
  props<{ payload: number }>()
);

export const DeleteUsuarioFailure = createAction(
  UsuariosActionTypes.DELETE_USUARIO_FAILURE,
  props<{ error: string }>()
);