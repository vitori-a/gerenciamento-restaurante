import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, tap } from 'rxjs';
import { Bebidas } from '../model/bebidas';

@Injectable({
  providedIn: 'root',
})
export class BebidasService {
  private readonly API = 'http://localhost:5000/bebidas';
  reload = true;

  constructor(private http: HttpClient) {}

  listar() {
    return this.http.get<Bebidas[]>(this.API).pipe(tap(console.log));
  }

  loadById(id: string) {
    return this.http.get<Bebidas>(`${this.API}/${id}`);
  }

  atualizar(bebidas: Partial<Bebidas>) {
    return this.http.put<Bebidas>(`${this.API}/${bebidas._id}`, bebidas);
  }

  remover(id: string): Observable<any> {
    return this.http.delete<any>(`${this.API}/${id}`);
  }

  cadastrar(bebidas: Partial<Bebidas>) {
    return this.http.post('http://localhost:5000/bebidas', bebidas);
  }
}
