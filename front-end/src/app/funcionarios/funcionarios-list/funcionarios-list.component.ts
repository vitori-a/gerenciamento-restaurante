import { Component } from '@angular/core';
import { Funcionarios } from '../model/funcionarios';
import { FuncionarioService } from '../services/funcionario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-funcionarios-list',
  templateUrl: './funcionarios-list.component.html',
  styleUrls: ['./funcionarios-list.component.css'],
})
export class FuncionariosListComponent {
  listaFuncionarios: Funcionarios[] = [];
  localUrl: any;
  file?: File;
  results$!: Observable<any>;

  constructor(
    private service: FuncionarioService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuider: FormBuilder
  ) {
    this.service.lista().subscribe((dados) => (this.listaFuncionarios = dados));
  }

  adicionar() {
    this.router.navigate(['novo'], { relativeTo: this.route });
  }

  editar(funcionario: Funcionarios) {
    this.router.navigate(['editar', funcionario._id], {
      relativeTo: this.route,
    });
  }

  deletar(funcionarios: Funcionarios) {
      this.service.remover(funcionarios._id).subscribe()
        window.location.reload();
    }
  }
