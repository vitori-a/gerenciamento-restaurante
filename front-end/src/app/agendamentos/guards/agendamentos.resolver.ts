import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { AgendamentosService } from '../service/agendamentos.service';
import { Agendamentos } from '../model/agendamentos';

@Injectable({
  providedIn: 'root'
})
export class AgendamentosResolver implements Resolve<Agendamentos> {

  data = new Date();
  constructor(private service: AgendamentosService){ }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Agendamentos> {

    if(route.params && route.params['id']){
      return this.service.loadById(route.params['id'])
    }
    return of(
      {
        _id: '',
        idUsuario: '',
        idEvento: '',
        nomeUsuario: '',
        nomeEvento: '',
        data: this.data,
        hora: '',
      });
  }
}
