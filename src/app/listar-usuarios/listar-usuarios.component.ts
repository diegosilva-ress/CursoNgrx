import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/UsuarioService';
import { UsuarioModel } from '../models/UsuarioModel';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.scss'],
})
export class ListarUsuariosComponent implements OnInit {
  listaUsuarios: UsuarioModel[] = [];

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe((usuarios: UsuarioModel[]) => {
      this.listaUsuarios = usuarios;
    });
  }
}
