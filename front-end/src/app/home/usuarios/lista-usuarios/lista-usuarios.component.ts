import { Component } from '@angular/core';
import { ListaUsuariosService } from './lista-usuarios.service';
import { NovoUsuario } from '../novo-usuario/model/novo-usuario';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent {

  listaUsuarios: NovoUsuario[] = [];

  constructor(
    private service: ListaUsuariosService,
    private router: Router,
    private route: ActivatedRoute
    ){
    this.service.listarUsuarios()
    .subscribe(dados => this.listaUsuarios = dados);
   }

   adicionar(){
    this.router.navigate(['novo'], { relativeTo: this.route})
  }

   editar(usuario: NovoUsuario){
    this.router.navigate(['editar', usuario._id], { relativeTo: this.route})
   }

   deletar(usuario: NovoUsuario) {
    this.service.remover(usuario._id).subscribe(() =>
    this.router.navigate([''], { relativeTo: this.route})
    );
  }
}
