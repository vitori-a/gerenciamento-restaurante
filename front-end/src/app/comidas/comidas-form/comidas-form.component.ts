import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Comida } from '../model/comida';
import { ComidasService } from '../service/comidas.service';

@Component({
  selector: 'app-comidas-form',
  templateUrl: './comidas-form.component.html',
  styleUrls: ['./comidas-form.component.css'],
})
export class ComidasFormComponent {
  comidaForm!: FormGroup;

  constructor(
    private formBuider: FormBuilder,
    private route: Router,
    private router: ActivatedRoute,
    private service: ComidasService
  ) {
    this.comidaForm = this.formBuider.group({
      nome: ['', [Validators.required, Validators.minLength(4)]],
      foto: ['', [Validators.required]],
      descricao: ['', [Validators.required]],
      preco: ['', [Validators.required]],
    });
    const comida: Comida = this.router.snapshot.data['comida'];
    this.comidaForm.setValue({
      nome: comida.nome,
      foto: comida.foto,
      descricao: comida.descricao,
      preco: comida.preco,
    });
  }

  salvar() {
    const comida = this.comidaForm.getRawValue() as Comida;
    this.service.cadastrar(this.comidaForm.value).subscribe(
      () => {
        this.route.navigate(['comidas']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
