import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subir-form',
  templateUrl: './subir-form.component.html',
  styleUrls: ['./subir-form.component.css']
})
export class SubirFormComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  cerrarSesion() {
    localStorage.ingresado = false;
    this.router.navigate(['/']);
  }

}
