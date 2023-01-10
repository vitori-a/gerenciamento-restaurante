import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fornecedores } from '../model/fornecedores';
import { FornecedoresService } from '../service/fornecedores.service';

@Component({
  selector: 'app-fornecedores-list',
  templateUrl: './fornecedores-list.component.html',
  styleUrls: ['./fornecedores-list.component.css'],
})
export class FornecedoresListComponent {
  listaFornecedores: Fornecedores[] = [];

  constructor(
    private service: FornecedoresService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.service.lista().subscribe((dados) => (this.listaFornecedores = dados));
  }

  adicionar() {
    this.router.navigate(['novo'], { relativeTo: this.route });
  }

  editar(fornecedores: Fornecedores) {
    this.router.navigate(['editar', fornecedores._id], {
      relativeTo: this.route,
    });
  }

  deletar(fornecedores: Fornecedores) {
    if (confirm('Deseja realmente excluir?')) {
      this.service
        .remover(fornecedores._id)
        .subscribe(() =>
          this.router.navigate(['/inicio'], { relativeTo: this.route })
        );
    }
  }

  atualizar(id: string) {
    this.router.navigate(['editar', id]);
  }
}
