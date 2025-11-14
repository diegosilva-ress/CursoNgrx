import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../models/UsuarioModel';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app-state';
import * as fromUsuarioActions from '../store/usuarios/usuarios.actions'; 
import * as fromUsuarioSelector from '../store/usuarios/usuarios.reducer'; 
import { Observable } from 'rxjs';
import { filter, take } from 'rxjs/operators';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.scss'],
})
export class ListarUsuariosComponent implements OnInit {
  listaUsuarios$: Observable<UsuarioModel[]> = this.store.select(fromUsuarioSelector.getUsuarios);
  usuario$: Observable<UsuarioModel | null> = this.store.select(fromUsuarioSelector.getUsuario);
  selectedUsuario: UsuarioModel | null = null;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(fromUsuarioActions.LoadUsuarios());
  }

  buscar(userId: number): void {
    // Dispara a action para carregar o usuário por ID
    this.store.dispatch(fromUsuarioActions.LoadUsuarioById({ id: userId }));
    
    // Aguarda o usuário chegar no estado e cria uma cópia para edição
    this.usuario$.pipe(
      filter(u => u !== null),
      take(1)
    ).subscribe(usuario => {
      this.selectedUsuario = { ...usuario } as UsuarioModel;
    });
  }

  editar(): void {
    if (!this.selectedUsuario) return;
    this.store.dispatch(fromUsuarioActions.UpdateUsuario({ usuario: this.selectedUsuario }));
  }
}