import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Bebidas } from '../model/bebidas';
import { BebidasService } from '../services/bebidas.service';

@Injectable({
  providedIn: 'root'
})
export class BebidasResolver implements Resolve<Bebidas> {
  constructor(private service: BebidasService){ }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Bebidas> {

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
