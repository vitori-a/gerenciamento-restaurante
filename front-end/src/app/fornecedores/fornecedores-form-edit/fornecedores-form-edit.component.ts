import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Fornecedores } from '../model/fornecedores';
import { FornecedoresService } from '../service/fornecedores.service';

@Component({
  selector: 'app-fornecedores-form-edit',
  templateUrl: './fornecedores-form-edit.component.html',
  styleUrls: ['./fornecedores-form-edit.component.css'],
})
export class FornecedoresFormEditComponent {
  fornecedoresForm!: FormGroup;

  constructor(
    private formBuider: FormBuilder,
    private route: Router,
    private router: ActivatedRoute,
    private service: FornecedoresService
  ) {
    this.fornecedoresForm = this.formBuider.group({
      _id: [''],
      nome: ['', [Validators.required, Validators.minLength(4)]],
      foto: [''],
      descricao: [''],
    });
    const fornecedores: Fornecedores =
      this.router.snapshot.data['fornecedores'];
    this.fornecedoresForm.setValue({
      _id: fornecedores._id,
      nome: fornecedores.nome,
      foto: fornecedores.foto,
      descricao: fornecedores.descricao,
    });
  }

  salvar() {
    const fornecedores = this.fornecedoresForm.getRawValue() as Fornecedores;
    this.service.atualizar(fornecedores).subscribe(
      () => {
        this.route.navigate(['fornecedores']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
