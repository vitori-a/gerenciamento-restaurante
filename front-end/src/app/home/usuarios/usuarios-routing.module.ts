import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { UsuarioResolverResolver } from './guards/usuario-resolver.resolver';
import { UsuarioFormEditComponent } from './usuario-form-edit/usuario-form-edit.component';

const routes: Routes =
[
  {
    path: '',
  component: ListaUsuariosComponent},
  {
    path: 'editar/:id',
    component: UsuarioFormEditComponent, resolve: {usuario: UsuarioResolverResolver}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
