import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ListaUsuariosService } from '../lista-usuarios/lista-usuarios.service';
import { NovoUsuario } from '../novo-usuario/model/novo-usuario';

@Component({
  selector: 'app-usuario-form-edit',
  templateUrl: './usuario-form-edit.component.html',
  styleUrls: ['./usuario-form-edit.component.css'],
})
export class UsuarioFormEditComponent {
  novoUsuarioForm!: FormGroup;

  constructor(
    private formBuider: FormBuilder,
    private route: Router,
    private router: ActivatedRoute,
    private service: ListaUsuariosService
  ) {
    this.novoUsuarioForm = this.formBuider.group({
      _id: [''],
      nome: ['', [Validators.required, Validators.minLength(4)]],
      cpf: ['', [Validators.required]],
      telefone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]],
    });

    const usuario: NovoUsuario = this.router.snapshot.data['usuario'];
    this.novoUsuarioForm.setValue({
      _id: usuario._id,
      nome: usuario.nome,
      cpf: usuario.cpf,
      telefone: usuario.telefone,
      email: usuario.email,
      senha: usuario.senha,
    });
  }

  salvar() {
    const usuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;
    this.service.atualizarUsuario(usuario).subscribe(
      () => {
        this.route.navigate(['usuarios']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
