import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Funcionarios } from '../model/funcionarios';
import { delay, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {


  private readonly API = 'http://localhost:5000/funcionarios';

  constructor(private http: HttpClient) { }

  cadastrar(funcionario: Partial<Funcionarios>){
    this.uploadFile;
    return this.http.post(this.API, funcionario);
  }

  uploadFile(file: File) {
    const formData: FormData = new FormData();
    console.log(file.name);
    console.log(file);
    formData.append('image', file, file.name);
    return this.http.post(this.API, formData)
  }

  lista(){
    return this.http.get<Funcionarios[]>(this.API)
      .pipe(
        tap(console.log)
      );
  }

  remover(id: string): Observable<any>{
    return this.http.delete<any>(`${this.API}/${id}`);
  }

  atualizar(funcionario: Partial<Funcionarios>){
    return this.http.put<Funcionarios>(`${this.API}/${funcionario._id}`, funcionario);
  }

  loadById(id: string){
    return this.http.get<Funcionarios>(`${this.API}/${id}`);
  }

}
