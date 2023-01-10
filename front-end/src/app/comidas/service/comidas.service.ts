import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, tap } from 'rxjs';
import { Comida } from '../model/comida';

@Injectable({
  providedIn: 'root'
})
export class ComidasService {

  private readonly API = 'http://localhost:5000/comidas';

  constructor(private http: HttpClient) { }

  cadastrar(comida: Partial<Comida>){
    return this.http.post(this.API, comida);
  }

  lista(){
    return this.http.get<Comida[]>(this.API)
      .pipe(
        tap(console.log)
      );
  }

  remover(id: string): Observable<any>{
    return this.http.delete<any>(`${this.API}/${id}`);
  }

  atualizar(comida: Partial<Comida>){
    return this.http.put<Comida>(`${this.API}/${comida._id}`, comida);
  }

  loadById(id: string){
    return this.http.get<Comida>(`${this.API}/${id}`);
  }
}


