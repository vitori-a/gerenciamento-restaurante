import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FornecedoresService } from '../service/fornecedores.service';
import { Fornecedores } from '../model/fornecedores';

@Component({
  selector: 'app-fornecedores-form',
  templateUrl: './fornecedores-form.component.html',
  styleUrls: ['./fornecedores-form.component.css'],
})
export class FornecedoresFormComponent {
  fornecedoresForm!: FormGroup;

  constructor(
    private formBuider: FormBuilder,
    private route: Router,
    private router: ActivatedRoute,
    private service: FornecedoresService
  ) {
    this.fornecedoresForm = this.formBuider.group({
      nome: ['', [Validators.required, Validators.minLength(4)]],
      foto: ['', [Validators.required]],
      descricao: ['', [Validators.required]],
    });
    const fornecedores: Fornecedores =
      this.router.snapshot.data['fornecedores'];
    this.fornecedoresForm.setValue({
      nome: fornecedores.nome,
      foto: fornecedores.foto,
      descricao: fornecedores.descricao,
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
        this.fornecedoresForm.patchValue({ foto: this.imagem });
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  salvar() {
    const fornecedores = this.fornecedoresForm.getRawValue() as Fornecedores;
    this.service.cadastrar(fornecedores).subscribe(
      () => {
        this.route.navigate(['fornecedores']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
