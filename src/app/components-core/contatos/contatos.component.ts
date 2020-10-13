import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent implements OnInit {


  
  @Input() contatos:any;
  @Input() redesSociais:any;
  @Input() parceiros:any;
  
  constructor() { }

  ngOnInit() {
  }

}
