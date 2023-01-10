import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Comida } from '../model/comida';
import { ComidasService } from '../service/comidas.service';

@Component({
  selector: 'app-comidas-form-edit',
  templateUrl: './comidas-form-edit.component.html',
  styleUrls: ['./comidas-form-edit.component.css'],
})
export class ComidasFormEditComponent {
  comidaForm!: FormGroup;

  constructor(
    private formBuider: FormBuilder,
    private route: Router,
    private router: ActivatedRoute,
    private service: ComidasService
  ) {
    this.comidaForm = this.formBuider.group({
      _id: [''],
      nome: ['', [Validators.required, Validators.minLength(4)]],
      foto: [''],
      descricao: [''],
      preco: [''],
    });
    const comida: Comida = this.router.snapshot.data['comida'];
    this.comidaForm.setValue({
      _id: comida._id,
      nome: comida.nome,
      foto: comida.foto,
      descricao: comida.descricao,
      preco: comida.preco,
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
        this.comidaForm.patchValue({ foto: this.imagem });
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  salvar() {
    const comida = this.comidaForm.getRawValue() as Comida;
    this.service.atualizar(this.comidaForm.value).subscribe(
      () => {
        this.route.navigate(['comidas']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
