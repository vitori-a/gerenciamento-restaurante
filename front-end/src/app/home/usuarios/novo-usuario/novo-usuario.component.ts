import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NovoUsuario } from './model/novo-usuario';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ListaUsuariosService } from '../lista-usuarios/lista-usuarios.service';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css'],
})
export class NovoUsuarioComponent {
  novoUsuarioForm!: FormGroup;

  constructor(
    private formBuider: FormBuilder,
    private location: Location,
    private route: Router,
    private router: ActivatedRoute,
    private service: ListaUsuariosService
  ) {
    this.novoUsuarioForm = this.formBuider.group({
      nome: ['', [Validators.required, Validators.minLength(4)]],
      cpf: ['', [Validators.required]], //, [this.cpfExistente.usuarioJaExiste()]],
      telefone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]],
    });

    const usuario: NovoUsuario = this.router.snapshot.data['usuario'];
    this.novoUsuarioForm.setValue({
      nome: usuario.nome,
      cpf: usuario.cpf,
      telefone: usuario.telefone,
      email: usuario.email,
      senha: usuario.senha,
    });
  }

  cancelar() {
    this.location.back();
  }

  salvar() {
    const usuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;
    this.service.cadastrarNovoUsuario(usuario).subscribe(
      () => {
        this.route.navigate(['usuarios']);
      },
      (error) => {
        console.log(error);
        alert('CPF Inválido');
      }
    );
  }
}
