import { Component } from '@angular/core';
import { Comida } from '../model/comida';
import { ComidasService } from '../service/comidas.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comidas-list',
  templateUrl: './comidas-list.component.html',
  styleUrls: ['./comidas-list.component.css'],
})
export class ComidasListComponent {
  listaComidas: Comida[] = [];

  constructor(
    private service: ComidasService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.service.lista().subscribe((dados) => (this.listaComidas = dados));
  }

  adicionar() {
    this.router.navigate(['novo'], { relativeTo: this.route });
  }

  editar(comida: Comida) {
    this.router.navigate(['editar', comida._id], { relativeTo: this.route });
  }

  deletar(comida: Comida) {
    if (confirm('Deseja realmente excluir?')) {
      this.service
        .remover(comida._id)
        .subscribe(() =>
          this.router.navigate(['/inicio'], { relativeTo: this.route })
        );
    }
  }

  atualizar(id: string) {
    this.router.navigate(['editar', id]);
  }
}
