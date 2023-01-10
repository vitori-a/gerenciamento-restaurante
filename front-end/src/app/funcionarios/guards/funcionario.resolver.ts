import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Funcionarios } from '../model/funcionarios';
import { FuncionarioService } from '../services/funcionario.service';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioResolver implements Resolve<Funcionarios> {

  constructor(private service: FuncionarioService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Funcionarios> {

    if(route.params && route.params['id']){
      return this.service.loadById(route.params['id'])
    }
    return of(
      {
        _id: '',
       nome: '',
       foto: '',
       idade: 0,
       cargo: '',
       naturalidade: '',
       anoAdmissao: 0,
       hobbie: ''
      });
  }
}
