import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, tap } from 'rxjs';
import { Fornecedores } from '../model/fornecedores';

@Injectable({
  providedIn: 'root'
})
export class FornecedoresService {

  private readonly API = 'http://localhost:5000/fornecedores';

  constructor(private http: HttpClient) { }

  cadastrar(fornecedores: Partial<Fornecedores>){
    return this.http.post(this.API, fornecedores);
  }

  lista(){
    return this.http.get<Fornecedores[]>(this.API)
      .pipe(
        tap(console.log)
      );
  }

  remover(id: string): Observable<any>{
    return this.http.delete<any>(`${this.API}/${id}`);
  }

  atualizar(fornecedores: Partial<Fornecedores>){
    return this.http.put<Fornecedores>(`${this.API}/${fornecedores._id}`, fornecedores);
  }

  loadById(id: string){
    return this.http.get<Fornecedores>(`${this.API}/${id}`);
  }
}

