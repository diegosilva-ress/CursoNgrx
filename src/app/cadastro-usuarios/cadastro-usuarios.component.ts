import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../models/UsuarioModel';
import { UsuarioService } from '../services/UsuarioService';

@Component({
  selector: 'app-cadastro-usuarios',
  templateUrl: './cadastro-usuarios.component.html',
  styleUrls: ['./cadastro-usuarios.component.scss'],
})
export class CadastroUsuariosComponent implements OnInit {
  model: UsuarioModel = { id: 0, nome: '', idade: 0, perfil: '' };

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    // Convert to number and handle empty string/null
    const idNumerico = Number(this.model.id) || 0;

    console.log('ID antes da conversão:', this.model.id, typeof this.model.id);
    console.log('ID após conversão:', idNumerico, typeof idNumerico);

    if (idNumerico === 0) {
      console.log('Adicionando novo usuário');
      this.usuarioService.addUsuario(this.model).subscribe(() => {
        this.model = { id: 0, nome: '', idade: 0, perfil: '' };
      });
    } else {
      console.log('Atualizando usuário existente');
      this.usuarioService.updateUsuario(this.model).subscribe(() => {
        this.model = { id: 0, nome: '', idade: 0, perfil: '' };
      });
    }
  }
}
