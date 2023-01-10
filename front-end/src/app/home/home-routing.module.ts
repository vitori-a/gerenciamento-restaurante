import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { UsuarioResolverResolver } from './usuarios/guards/usuario-resolver.resolver';
import { NovoUsuarioComponent } from './usuarios/novo-usuario/novo-usuario.component';


const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: LoginComponent,
      },
      {
        path:"novousuario",
        component: NovoUsuarioComponent, resolve: {usuario: UsuarioResolverResolver}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
