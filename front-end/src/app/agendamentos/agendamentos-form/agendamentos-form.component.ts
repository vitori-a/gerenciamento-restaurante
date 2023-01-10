import { Component } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AgendamentosService } from '../service/agendamentos.service';
import { Agendamentos } from '../model/agendamentos';
import { NovoUsuario } from '../../home/usuarios/novo-usuario/model/novo-usuario';
import { ListaUsuariosService } from '../../home/usuarios/lista-usuarios/lista-usuarios.service';
import { EventosService } from '../../eventos/service/eventos.service';
import { Eventos } from '../../eventos/model/eventos';

@Component({
  selector: 'app-agendamentos-form',
  templateUrl: './agendamentos-form.component.html',
  styleUrls: ['./agendamentos-form.component.css'],
})
export class AgendamentosFormComponent {
  usuarioList: NovoUsuario[] = [];
  eventosList: Eventos[] = [];
  agendamentoForm!: FormGroup;
  data = new Date();

  constructor(
    private formBuider: NonNullableFormBuilder,
    private route: Router,
    private router: ActivatedRoute,
    private service: AgendamentosService,
    private serviceUsuario: ListaUsuariosService,
    private serviceEventos: EventosService
  ) {
    this.agendamentoForm = this.formBuider.group({
      idUsuario: [''],
      idEvento: [''],
      nomeUsuario: [''],
      nomeEvento: [''],
      data: [''],
      hora: [''],
    });
    const agendamentos: Agendamentos =
      this.router.snapshot.data['agendamentos'];
    this.agendamentoForm.setValue({
      idUsuario: agendamentos.idUsuario,
      idEvento: agendamentos.idEvento,
      nomeUsuario: agendamentos.nomeUsuario,
      nomeEvento: agendamentos.nomeEvento,
      data: agendamentos.data,
      hora: agendamentos.hora,
    });
  }

  listarUsuario() {
    this.serviceUsuario
      .listarUsuarios()
      .subscribe((dados) => (this.usuarioList = dados));
  }

  listarEvento() {
    this.serviceEventos
      .listar()
      .subscribe((dados) => (this.eventosList = dados));
  }

  salvar() {
    this.service.cadastrar(this.agendamentoForm.value).subscribe(
      () => {
        this.route.navigate(['agendamentos']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
