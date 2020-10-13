import { CadastrarClientesComponent } from '../home/cadastrar-clientes/cadastrar-clientes.component';
import {HomeComponent} from '../home/home.component'

// import { LoginGuard } from './../login/login.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    //path: 'clientes' using lazyloading,
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'home/cadastrar-clientes', component: CadastrarClientesComponent },
      // { path: 'listaclientes', component: ClientesListaComponent },
     // { path: 'lista-pedidos', component: ClientesPedidosComponent },
      // { path: ':id', component: ClientesComponent, canActivate: [LoginGuard] }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule { }
