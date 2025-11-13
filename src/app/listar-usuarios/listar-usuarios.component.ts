import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../models/UsuarioModel';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app-state';
import * as fromUsuarioActions from '../store/usuarios/usuarios.actions'; 
import * as fromUsuarioSelector from '../store/usuarios/usuarios.reducer'; 
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.scss'],
})
export class ListarUsuariosComponent implements OnInit {
  listaUsuarios$: Observable<UsuarioModel[]> = this.store.select(fromUsuarioSelector.getUsuarios);

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(fromUsuarioActions.LoadUsuarios());
  }
}
