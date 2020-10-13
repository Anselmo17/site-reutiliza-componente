import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Componente Material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';

//Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components-core/header/header.component';
import { FooterComponent } from './components-core/footer/footer.component';
import { HomeFigureComponent } from './modules/home/home-figure/home-figure.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './modules/home/home.component';
import { QuemSomosComponent } from './modules/quem-somos/quem-somos.component';
import { ContatosComponent } from './components-core/contatos/contatos.component';
import { PageErrorComponent } from './modules/page-error/page-error.component';
import { CadastroPedidosComponent } from './modules/cadastro-pedidos/cadastro-pedidos.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeFigureComponent,
    HomeComponent,
    QuemSomosComponent,
    ContatosComponent,
    PageErrorComponent,
    CadastroPedidosComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatMenuModule,
    MatGridListModule,
    MatCardModule,
    MatDividerModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule
  ],
  exports:[
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
