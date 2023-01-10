import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NovoUsuario } from '../novo-usuario/model/novo-usuario';
import { delay, tap, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListaUsuariosService {
  private readonly API = 'http://localhost:5000/usuarios';

  constructor(private http: HttpClient) {}

  listarUsuarios() {
    return this.http.get<NovoUsuario[]>(this.API).pipe(tap(console.log));
  }

  loadById(id: string) {
    return this.http.get<NovoUsuario>(`${this.API}/${id}`);
  }

  atualizarUsuario(usuario: Partial<NovoUsuario>) {
    return this.http.put<NovoUsuario>(`${this.API}/${usuario._id}`, usuario);
  }

  remover(id: string): Observable<any> {
    return this.http.delete<any>(`${this.API}/${id}`);
  }

  cadastrarNovoUsuario(usuario: Partial<NovoUsuario>) {
    return this.http.post('http://localhost:5000/usuarios', usuario);
  }

  salvar(usuario: Partial<NovoUsuario>) {
    if (usuario._id) {
      return this.atualizarUsuario(usuario);
    }
    return this.cadastrarNovoUsuario(usuario);
  }
}
