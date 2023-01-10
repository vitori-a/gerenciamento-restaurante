import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BebidasListComponent } from './bebidas-list/bebidas-list.component';
import { BebidasFormComponent } from './bebidas-form/bebidas-form.component';
import { BebidasResolver } from './guards/bebidas.resolver';
import { BebidasFormEditComponent } from './bebidas-form-edit/bebidas-form-edit.component';

const routes: Routes = [
  {
    path: '',
    component: BebidasListComponent,
  },
  {
    path: 'novo',
    component: BebidasFormComponent,
    resolve: { bebida: BebidasResolver },
  },
  {
    path: 'editar/:id',
    component: BebidasFormEditComponent,
    resolve: { bebida: BebidasResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BebidasRoutingModule {}
