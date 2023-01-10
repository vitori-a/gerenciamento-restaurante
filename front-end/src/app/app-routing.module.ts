import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'usuarios',
    loadChildren:() => import('./home/usuarios/usuarios.module').then((m) => m.UsuariosModule),
  },
  {
    path: 'funcionarios',
    loadChildren:() => import('./funcionarios/funcionarios.module').then((m) => m.FuncionariosModule),
  },
  {
    path: 'bebidas',
    loadChildren:() => import('./bebidas/bebidas.module').then((m) => m.BebidasModule),
  },
  {
    path: 'comidas',
    loadChildren:() => import('./comidas/comidas.module').then((m) => m.ComidasModule),
  },
  {
    path: 'fornecedores',
    loadChildren:() => import('./fornecedores/fornecedores.module').then((m) => m.FornecedoresModule),
  },
  {
    path: 'eventos',
    loadChildren:() => import('./eventos/eventos.module').then((m) => m.EventosModule),
  },
  {
    path: 'agendamentos',
    loadChildren:() => import('./agendamentos/agendamentos.module').then((m) => m.AgendamentosModule),
  },
  {
    path: 'inicio',
    loadChildren:() => import('./inicio/inicio.module').then((m) => m.InicioModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
