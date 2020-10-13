import { Component, OnInit, Input } from '@angular/core';

import * as data from '../../mocks/mocks.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
    // lista contatos
    listContatos = (<any>data).listContatos;
    // redes sociais
    redesSociais = (<any>data).redesSociais;
    // parceiros
    parceiros = (<any>data).parceiros;
  
  constructor() { }

  ngOnInit() {
    
  }

}
