import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(
    private httpClient: HttpClient) { }

  autenticar(email: string, senha: string): Observable<HttpResponse<any>> {
    return this.httpClient.post<any>('http://localhost:5000/login', {
      email: email,
      senha: senha,
    });
  }
}

