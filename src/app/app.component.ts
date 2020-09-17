import { Component } from '@angular/core';

@Component({
  selector: 'edu-root',
  templateUrl: "./app.component.html",
  styleUrls: ['./app.component.css'] 
 /* templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] */
})
export class AppComponent {
  titulo = 'Educacional';


  itensMenu = [
    { label: 'Alunos', link: '/alunos'},
    { label: 'Sobre', link: '/sobre'}
  ];
}
