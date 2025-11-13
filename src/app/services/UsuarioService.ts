import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/UsuarioModel';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private http: HttpClient) {}

  getUsuarios() {
    return this.http.get<UsuarioModel[]>('http://localhost:3000/Usuarios');
  }

  getUsuarioById(id: number) {
    return this.http.get<UsuarioModel>(`http://localhost:3000/Usuarios/${id}`);
  }

  addUsuario(usuario: Omit<UsuarioModel, 'id'>) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.http.post<UsuarioModel>(
      'http://localhost:3000/Usuarios',
      JSON.stringify(usuario),
      { headers: headers }
    );
  }

  updateUsuario(usuario: UsuarioModel) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.http.put<UsuarioModel>(
      `http://localhost:3000/Usuarios/${usuario.id}`,
      JSON.stringify(usuario),
      { headers: headers }
    );
  }

  deleteUsuario(id: number) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.http.delete<UsuarioModel>(
      `http://localhost:3000/Usuarios/${id}`,
      { headers: headers }
    );
  }
}
