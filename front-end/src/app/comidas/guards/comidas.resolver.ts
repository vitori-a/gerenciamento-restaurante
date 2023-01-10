import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ComidasService } from '../service/comidas.service';
import { Comida } from '../model/comida';

@Injectable({
  providedIn: 'root'
})
export class ComidasResolver implements Resolve<Comida> {

  constructor(private service: ComidasService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Comida> {

    if(route.params && route.params['id']){
      return this.service.loadById(route.params['id'])
    }
    return of(
      {
        _id: '',
       nome: '',
       foto: '',
       descricao: '',
       preco: 0
      });
  }
}
