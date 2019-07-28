import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  contrasenia: string;
  correo: string;
  errorMesage: string;


  constructor(private router: Router) { }

  ngOnInit() {
    if (localStorage.ingresado != null && localStorage.ingresado == true) {
      this.router.navigate(['/muro']);
    }
    this.errorMesage = null;
  }


  ingresar() {

    if (this.correo == 'anthony.casanova@gmail.com' && this.contrasenia == 'anthony1998') {
      localStorage.ingresado = true;
      this.router.navigate(['/muro']);
    } else {
      this.errorMesage = 'Credenciales Incorrectas';
      this.contrasenia = '';
    }

  }

}
