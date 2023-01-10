import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bebidas } from '../model/bebidas';
import { BebidasService } from '../services/bebidas.service';

@Component({
  selector: 'app-bebidas-list',
  templateUrl: './bebidas-list.component.html',
  styleUrls: ['./bebidas-list.component.css'],
})
export class BebidasListComponent {
  listaBebidas: Bebidas[] = [];
  _id: any;
  nome: any;

  constructor(
    private service: BebidasService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.service.listar().subscribe((dados) => (this.listaBebidas = dados));
  }

  adicionar() {
    this.router.navigate(['novo'], { relativeTo: this.route });
  }

  buscar(bebidas: Bebidas){
    this.service.loadById(bebidas._id)
    .subscribe()
    console.log(bebidas);
  }

  editar(bebidas: Bebidas) {
    this.router.navigate(['editar', bebidas._id], { relativeTo: this.route });
  }

  reload(){
    if(this.service.reload){
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate(['bebidas']);
        this.service.reload = false;
      })
    }
  }

  deletar(bebidas: Bebidas) {
    if(confirm("Deseja realmente excluir?")){
      this.service
      .remover(bebidas._id)
      .subscribe(() => this.router.navigate(['/inicio'], { relativeTo: this.route }));
    }
  }

}
