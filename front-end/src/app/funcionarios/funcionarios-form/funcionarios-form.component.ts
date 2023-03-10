import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FuncionarioService } from '../services/funcionario.service';
import { Funcionarios } from '../model/funcionarios';

@Component({
  selector: 'app-funcionarios-form',
  templateUrl: './funcionarios-form.component.html',
  styleUrls: ['./funcionarios-form.component.css'],
})
export class FuncionariosFormComponent {
  funcionarioForm!: FormGroup;
  url: any;
  file?: File;

  constructor(
    private formBuider: FormBuilder,
    private route: Router,
    private router: ActivatedRoute,
    private service: FuncionarioService
  ) {
    this.funcionarioForm = this.formBuider.group({
      nome: ['', [Validators.required, Validators.minLength(4)]],
      foto: ['', [Validators.required]],
      idade: ['', [Validators.required]],
      cargo: ['', [Validators.required]],
      naturalidade: ['', [Validators.required]],
      anoAdmissao: ['', [Validators.required]],
      hobbie: ['', [Validators.required]],
    });
    const funcionario: Funcionarios = this.router.snapshot.data['funcionario'];
    this.funcionarioForm.setValue({
      nome: funcionario.nome,
      foto: funcionario.foto,
      idade: funcionario.idade,
      cargo: funcionario.cargo,
      naturalidade: funcionario.naturalidade,
      anoAdmissao: funcionario.anoAdmissao,
      hobbie: funcionario.hobbie,
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
        this.funcionarioForm.patchValue({ foto: this.imagem });
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  salvar() {
    const funcionario = this.funcionarioForm.getRawValue() as Funcionarios;
    this.service.cadastrar(funcionario).subscribe(
      () => {
        this.route.navigate(['funcionarios']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
