import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Agendamentos } from '../model/agendamentos';
import { AgendamentosService } from '../service/agendamentos.service';

@Component({
  selector: 'app-agendamentos-list',
  templateUrl: './agendamentos-list.component.html',
  styleUrls: ['./agendamentos-list.component.css'],
})
export class AgendamentosListComponent {
  agendamentoList: Agendamentos[] = [];

  constructor(
    private service: AgendamentosService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.service.listar().subscribe((dados) => (this.agendamentoList = dados));
  }

  adicionar() {
    this.router.navigate(['novo'], { relativeTo: this.route });
  }

  editar(agendamentos: Agendamentos) {
    this.router.navigate(['editar', agendamentos._id], {
      relativeTo: this.route,
    });
  }

  deletar(agendamentos: Agendamentos) {
    if (confirm('Deseja realmente excluir?')) {
      this.service
        .remover(agendamentos._id)
        .subscribe(() =>
          this.router.navigate(['/inicio'], { relativeTo: this.route })
        );
    }
  }
}
