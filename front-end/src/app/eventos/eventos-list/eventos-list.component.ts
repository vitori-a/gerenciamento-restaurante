import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Eventos } from '../model/eventos';
import { EventosService } from '../service/eventos.service';

@Component({
  selector: 'app-eventos-list',
  templateUrl: './eventos-list.component.html',
  styleUrls: ['./eventos-list.component.css'],
})
export class EventosListComponent {
  eventosList: Eventos[] = [];

  constructor(
    private service: EventosService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.service.listar().subscribe((dados) => (this.eventosList = dados));
  }

  adicionar() {
    this.router.navigate(['novo'], { relativeTo: this.route });
  }

  editar(eventos: Eventos) {
    this.router.navigate(['editar', eventos._id], { relativeTo: this.route });
  }

  deletar(eventos: Eventos) {
    if (confirm('Deseja realmente excluir?')) {
      this.service
        .remover(eventos._id)
        .subscribe(() =>
          this.router.navigate(['/inicio'], { relativeTo: this.route })
        );
    }
  }
}
