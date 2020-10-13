import { ModuleWithProviders, NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './modules/home/home.component';
import { CadastroPedidosComponent} from './modules/cadastro-pedidos/cadastro-pedidos.component';
import {PageErrorComponent} from '../app/modules/page-error/page-error.component';
import {QuemSomosComponent} from '../app/modules/quem-somos/quem-somos.component';

const routes: Routes = [
    {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'cadastrar-pedidos',
    component: CadastroPedidosComponent
  },
  {
    path: 'quem-somos',
    component: QuemSomosComponent
  },
  {
      path: '**',
      component: PageErrorComponent
    }
  ];


  export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

  @NgModule({
      exports: [RouterModule],
      imports: [RouterModule.forRoot(routes)]
    })
  
  export class AppRoutingModule {}
