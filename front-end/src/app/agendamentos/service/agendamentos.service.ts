import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Agendamentos } from '../model/agendamentos';

@Injectable({
  providedIn: 'root',
})
export class AgendamentosService {
  private readonly API = 'http://localhost:5000/agendamentos';

  constructor(private http: HttpClient) {}

  cadastrar(agendamentos: Partial<Agendamentos>) {
    return this.http.post(this.API, agendamentos);
  }

  listar() {
    return this.http.get<Agendamentos[]>(this.API).pipe(tap(console.log));
  }

  remover(id: string): Observable<any> {
    return this.http.delete<any>(`${this.API}/${id}`);
  }

  atualizar(agendamentos: Partial<Agendamentos>) {
    console.log(agendamentos)
    return this.http.put<Agendamentos>(`${this.API}/${agendamentos._id}`, agendamentos);
  }

  loadById(id: string) {
    return this.http.get<Agendamentos>(`${this.API}/${id}`);
  }

}
