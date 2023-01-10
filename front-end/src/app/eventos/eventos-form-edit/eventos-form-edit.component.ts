import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Eventos } from '../model/eventos';
import { EventosService } from '../service/eventos.service';

@Component({
  selector: 'app-eventos-form-edit',
  templateUrl: './eventos-form-edit.component.html',
  styleUrls: ['./eventos-form-edit.component.css'],
})
export class EventosFormEditComponent {
  eventosForm!: FormGroup;
  data = new Date();

  constructor(
    private formBuider: FormBuilder,
    private route: Router,
    private router: ActivatedRoute,
    private service: EventosService
  ) {
    this.eventosForm = this.formBuider.group({
      _id: [''],
      nome: ['', [Validators.required, Validators.minLength(4)]],
      foto: [''],
      descricao: [''],
      dataInicio: [''],
      dataFim: [''],
      horaInicio: [''],
      horaFim: [''],
    });
    const eventos: Eventos = this.router.snapshot.data['eventos'];
    this.eventosForm.setValue({
      _id: eventos._id,
      nome: eventos.nome,
      foto: eventos.foto,
      descricao: eventos.descricao,
      dataInicio: eventos.dataInicio,
      dataFim: eventos.dataFim,
      horaInicio: eventos.horaInicio,
      horaFim: eventos.horaFim,
    });
  }

  salvar() {
    const eventos = this.eventosForm.getRawValue() as Eventos;
    this.service.cadastrar(this.eventosForm.value).subscribe(
      () => {
        this.route.navigate(['eventos']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
