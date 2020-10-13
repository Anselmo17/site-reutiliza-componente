import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reutiliza-component';

  titulo:string = 'Bemvindo ao nosso Header'

  constructor() { }

  ngOnInit() {
  
  }

}
