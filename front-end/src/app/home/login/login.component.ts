import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from '../../autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email = '';
  senha = '';

  constructor(
    private authService: AutenticacaoService,
    private router: Router
  ) {}

  login(): any {
    this.authService.autenticar(this.email, this.senha).subscribe({
      next: () => this.router.navigate(['/inicio']),
      error: (error) => {
        alert('Usuário ou senha inválido.');
        console.error(error);
      },
    });
  }
}
