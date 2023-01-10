import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { EventosService } from '../service/eventos.service';
import { Eventos } from '../model/eventos';
import { EventosFormComponent } from '../eventos-form/eventos-form.component';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class EventosResolver implements Resolve<Eventos> {

  data = new Date();
  constructor(private service: EventosService){ }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Eventos> {

    if(route.params && route.params['id']){
      return this.service.loadById(route.params['id'])
    }
    return of(
      {
        _id: '',
       nome: '',
       foto: '',
       descricao: '',
       dataInicio: this.data,
       dataFim: this.data,
       horaInicio: '',
       horaFim: '',
      }
      );
  }
}
