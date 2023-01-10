import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { FornecedoresService } from '../service/fornecedores.service';
import { Fornecedores } from '../model/fornecedores';

@Injectable({
  providedIn: 'root'
})
export class FornecedoresResolver implements Resolve<Fornecedores> {

  constructor(private service: FornecedoresService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Fornecedores> {

    if(route.params && route.params['id']){
      return this.service.loadById(route.params['id'])
    }
    return of(
      {
        _id: '',
       nome: '',
       foto: '',
       descricao: ''
      });
  }
}

