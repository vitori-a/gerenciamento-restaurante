import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ListaUsuariosService } from '../lista-usuarios/lista-usuarios.service';
import { NovoUsuario } from '../novo-usuario/model/novo-usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioResolverResolver implements Resolve<NovoUsuario> {

  constructor(private service: ListaUsuariosService){
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<NovoUsuario> {

    if(route.params && route.params['id']){
      return this.service.loadById(route.params['id'])
    }
    return of({_id: '', nome: '', cpf: '', telefone: '', email: '', senha: '' });
  }
}
