import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  NonNullableFormBuilder,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BebidasService } from '../services/bebidas.service';
import { Bebidas } from '../model/bebidas';

@Component({
  selector: 'app-bebidas-form',
  templateUrl: './bebidas-form.component.html',
  styleUrls: ['./bebidas-form.component.css'],
})
export class BebidasFormComponent {
  bebidasForm = this.formBuider.group({
    nome: ['', [Validators.required, Validators.minLength(4)]],
    foto: ['', [Validators.required]],
    descricao: ['', Validators.required],
    preco: 0,
  });

  constructor(
    private formBuider: NonNullableFormBuilder,
    private route: Router,
    private router: ActivatedRoute,
    private service: BebidasService
  ) {
    const bebida: Bebidas = this.router.snapshot.data['bebida'];
    this.bebidasForm.setValue({
      nome: bebida.nome,
      foto: bebida.foto,
      descricao: bebida.descricao,
      preco: bebida.preco,
    });
  }

  salvar() {
    this.service.cadastrar(this.bebidasForm.value).subscribe(
      () => {
        this.route.navigate(['bebidas']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
