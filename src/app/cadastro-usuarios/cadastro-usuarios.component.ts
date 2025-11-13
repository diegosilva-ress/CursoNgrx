import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../models/UsuarioModel';
import { AppState } from '../store/app-state';
import { Store } from '@ngrx/store';
import * as fromUsuarioActions from '../store/usuarios/usuarios.actions';

@Component({
  selector: 'app-cadastro-usuarios',
  templateUrl: './cadastro-usuarios.component.html',
  styleUrls: ['./cadastro-usuarios.component.scss'],
})
export class CadastroUsuariosComponent implements OnInit {
  model: UsuarioModel = { id: 0, nome: '', idade: 0, perfil: '' };

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.store.dispatch(
      fromUsuarioActions.CreateUsuario({ usuario: this.model })
    );
  }
}
