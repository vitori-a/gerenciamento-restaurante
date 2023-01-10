import { Component } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Bebidas } from '../model/bebidas';
import { BebidasService } from '../services/bebidas.service';

@Component({
  selector: 'app-bebidas-form-edit',
  templateUrl: './bebidas-form-edit.component.html',
  styleUrls: ['./bebidas-form-edit.component.css'],
})
export class BebidasFormEditComponent {
  bebidasForm = this.formBuider.group({
    _id: [''],
    nome: ['', [Validators.required, Validators.minLength(4)]],
    foto: ['', [Validators.required]],
    descricao: ['', [Validators.required]],
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
      _id: bebida._id,
      nome: bebida.nome,
      foto: bebida.foto,
      descricao: bebida.descricao,
      preco: bebida.preco,
    });
  }

  salvar() {
    this.service.atualizar(this.bebidasForm.value).subscribe(
      () => {
        this.route.navigate(['bebidas']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
