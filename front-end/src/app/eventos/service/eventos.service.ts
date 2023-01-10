import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, tap } from 'rxjs';
import { Eventos } from '../model/eventos';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  private readonly API = 'http://localhost:5000/eventos';

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<Eventos[]>(this.API)
    .pipe(
      //delay(2000),
      tap(console.log)
    );
  }

  loadById(id: string){
    return this.http.get<Eventos>(`${this.API}/${id}`);
  }

  atualizar(eventos: Partial<Eventos>){
    return this.http.put<Eventos>(`${this.API}/${eventos._id}`, eventos);
  }

  remover(id: string): Observable<any>{
    return this.http.delete<any>(`${this.API}/${id}`);
  }

  cadastrar(eventos: Partial<Eventos>){
    return this.http.post('http://localhost:5000/eventos', eventos);
  }

}

