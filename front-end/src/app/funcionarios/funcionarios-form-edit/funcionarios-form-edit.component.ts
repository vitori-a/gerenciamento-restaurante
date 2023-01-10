import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionarios } from '../model/funcionarios';
import { FuncionarioService } from '../services/funcionario.service';

@Component({
  selector: 'app-funcionarios-form-edit',
  templateUrl: './funcionarios-form-edit.component.html',
  styleUrls: ['./funcionarios-form-edit.component.css'],
})
export class FuncionariosFormEditComponent {
  funcionarioForm!: FormGroup;

  constructor(
    private formBuider: FormBuilder,
    private route: Router,
    private router: ActivatedRoute,
    private service: FuncionarioService
  ) {
    this.funcionarioForm = this.formBuider.group({
      _id: [''],
      nome: ['', [Validators.required, Validators.minLength(4)]],
      foto: [''],
      idade: [''],
      cargo: [''],
      naturalidade: [''],
      anoAdmissao: [''],
      hobbie: [''],
    });
    const funcionario: Funcionarios = this.router.snapshot.data['funcionario'];
    this.funcionarioForm.setValue({
      _id: funcionario._id,
      nome: funcionario.nome,
      foto: funcionario.foto,
      idade: funcionario.idade,
      cargo: funcionario.cargo,
      naturalidade: funcionario.naturalidade,
      anoAdmissao: funcionario.anoAdmissao,
      hobbie: funcionario.hobbie,
    });
  }

  salvar() {
    const funcionario = this.funcionarioForm.getRawValue() as Funcionarios;
    this.service.atualizar(funcionario).subscribe(
      () => {
        this.route.navigate(['funcionarios']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
