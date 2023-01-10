import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventosService } from '../service/eventos.service';
import { Eventos } from '../model/eventos';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-eventos-form',
  templateUrl: './eventos-form.component.html',
  styleUrls: ['./eventos-form.component.css'],
})
export class EventosFormComponent {
  eventosForm!: FormGroup;
  data = new Date();

  constructor(
    private formBuider: FormBuilder,
    private route: Router,
    private router: ActivatedRoute,
    private service: EventosService
  ) {
    this.eventosForm = this.formBuider.group({
      nome: ['', [Validators.required, Validators.minLength(4)]],
      foto: ['', [Validators.required]],
      descricao: ['', [Validators.required]],
      dataInicio: ['', [Validators.required]],
      dataFim: ['', [Validators.required]],
      horaInicio: ['', [Validators.required]],
      horaFim: ['', [Validators.required]],
    });
    const eventos: Eventos = this.router.snapshot.data['eventos'];
    this.eventosForm.setValue({
      nome: eventos.nome,
      foto: eventos.foto,
      descricao: eventos.descricao,
      dataInicio: eventos.dataInicio,
      dataFim: eventos.dataFim,
      horaInicio: eventos.horaInicio,
      horaFim: eventos.horaFim,
    });
  }

  imagem: any = '';
  tamanhoExcedido: any = '';
  onFileSelect(event: any) {
    if (event.target.files && event.target.files[0]) {
      const foto = event.target.files[0];

      if (foto.size > 100000) {
        this.tamanhoExcedido = 'Tamanho da imagem excedido (Máximo: 100KB).';
      } else {
        this.tamanhoExcedido = '';
      }

      var reader = new FileReader();
      reader.onload = (event) => {
        this.imagem = (<FileReader>event.target).result;
        this.eventosForm.patchValue({ foto: this.imagem });
      };
      reader.readAsDataURL(event.target.files[0]);
    }
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
