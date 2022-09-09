import { Component } from '@angular/core';

interface Componente{

  icon: string;
  name: string;
  redirecTo: string;

}


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}


  componentes : Componente[] = [
    {
      icon: 'home-outline',
      name: 'Inicio',
      redirecTo: '/inicio'
    },
    {
      icon: 'person-outline',
      name: 'Profesor',
      redirecTo: '/alert'
    },
    {
      icon: 'book-outline',
      name: 'Alumno',
      redirecTo: '/action-sheet'
    },
    {
      icon: 'information-circle-outline',
      name: 'Quienes Somos',
      redirecTo: '/card'
    },
    {
      icon: 'qr-code-outline',
      name: 'Generar QR',
      redirecTo: '/generaQR'
    },


  ];



}
