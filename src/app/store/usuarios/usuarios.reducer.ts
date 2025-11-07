import { Action, createFeature, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { UsuarioModel } from "src/app/models/UsuarioModel";
import * as fromUsuariosAction from "./usuarios.actions";

//Responsavel por atualizar os estados conforme as ações disparadas

//Define o formato do estado que tem uma lista de usuarios,
//um usuario selecionado e uma string de erro
export interface UsuariosState {
  usuarios: UsuarioModel[];
  usuario: UsuarioModel | null;
  error: string;
}

//Atualiza o estado da aplicação para o estado inicial
export const initialUsuariosState: UsuariosState = {
  usuarios: [],
  usuario: null,
  error: ''
};

//Função que recebe o estado atual e uma ação, e retorna um novo estado
const _usuariosReducer = createReducer(
    initialUsuariosState,
    on(fromUsuariosAction.LoadUsuariosSuccess, (state, { payload }) => ({...state, usuarios: payload, error: '' })),
    on(fromUsuariosAction.LoadUsuariosFailure, (state, { error }) => ({...state, error: error })),

    on(fromUsuariosAction.LoadUsuarioByIdSuccess, (state, { payload }) => ({...state, usuario: payload, error: '' })),
    on(fromUsuariosAction.LoadUsuarioByIdFailure, (state, { error }) => ({...state, error: error })),

    on(fromUsuariosAction.CreateUsuarioSuccess, (state, { payload }) => ({...state, usuarios: [...state.usuarios, payload],  error: '' })),
    on(fromUsuariosAction.CreateUsuarioFailure, (state, { error }) => ({...state, error: error })),

    on(fromUsuariosAction.UpdateUsuarioSuccess, (state, { payload }) => ({
        ...state,
        usuarios: state.usuarios.map(usuario => usuario.id === payload.id ? payload : usuario),
        error: ''
    })),
    on(fromUsuariosAction.UpdateUsuarioFailure, (state, { error }) => ({...state, error: error })),

    on(fromUsuariosAction.DeleteUsuarioSuccess, (state, { payload }) => ({
        ...state,
        usuarios: state.usuarios.filter(usuario => usuario.id !== payload),
        error: ''
    })),
    on(fromUsuariosAction.DeleteUsuarioFailure, (state, { error }) => ({...state, error: error })),
);

export function usuariosReducer(state = initialUsuariosState, action: Action) {
    return _usuariosReducer(state, action);
}


//Seleciona o estado inteiro do estado de usuarios na Store
const getUsuariosFeatureState = createFeatureSelector<UsuariosState>('usuarios');

//Seleciona só a lista de usuarios do estado
export const getUsuarios = createSelector(
    getUsuariosFeatureState,
    (state) => state.usuarios
);

//Seleciona o usuario atualmente selecionado
export const getUsuario = createSelector(
    getUsuariosFeatureState,
    (state) => state.usuario
);

//Seleciona a string de erro do estado
export const getUsuariosError = createSelector(
    getUsuariosFeatureState,
    (state) => state.error
);