import { ComidasFormComponent } from './comidas-form/comidas-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComidasListComponent } from './comidas-list/comidas-list.component';
import { ComidasResolver } from './guards/comidas.resolver';
import { ComidasFormEditComponent } from './comidas-form-edit/comidas-form-edit.component';

const routes: Routes =
[
  {
    path: '',
    component: ComidasListComponent
  },
  {
    path: 'novo',
    component: ComidasFormComponent, resolve: {comida: ComidasResolver}
  },
  {
    path: 'editar/:id',
    component: ComidasFormEditComponent, resolve: {comida: ComidasResolver}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComidasRoutingModule { }
