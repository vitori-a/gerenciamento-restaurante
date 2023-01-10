import { Component } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Eventos } from 'src/app/eventos/model/eventos';
import { EventosService } from 'src/app/eventos/service/eventos.service';
import { ListaUsuariosService } from 'src/app/home/usuarios/lista-usuarios/lista-usuarios.service';
import { NovoUsuario } from 'src/app/home/usuarios/novo-usuario/model/novo-usuario';
import { Agendamentos } from '../model/agendamentos';
import { AgendamentosService } from '../service/agendamentos.service';

@Component({
  selector: 'app-agendamentos-form-edit',
  templateUrl: './agendamentos-form-edit.component.html',
  styleUrls: ['./agendamentos-form-edit.component.css'],
})
export class AgendamentosFormEditComponent {
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
      _id: [''],
      nomeUsuario: [''],
      nomeEvento: [''],
      data: [''],
      hora: [''],
    });
    const agendamentos: Agendamentos =
      this.router.snapshot.data['agendamentos'];
    this.agendamentoForm.setValue({
      _id: agendamentos._id,
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
