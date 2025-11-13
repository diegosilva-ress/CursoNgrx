import { ActionReducerMap } from "@ngrx/store";
import { usuariosReducer, UsuariosState } from "./usuarios/usuarios.reducer";
import { UsuariosEffects } from "./usuarios/usuarios.effects";


export interface AppState {
    usuarios: UsuariosState
}

export const appReducer: ActionReducerMap<AppState> = {
    usuarios: usuariosReducer
};

export const appEffects = [
    UsuariosEffects
]