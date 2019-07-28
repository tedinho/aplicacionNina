import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MuroService } from '../servicios/muro.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-muro',
  templateUrl: './muro.component.html',
  styleUrls: ['./muro.component.css']
})
export class MuroComponent implements OnInit {
  seleccion: string;
  errorSe: string;
  publicaciones: any[];
  constructor(private router: Router, private muroServicio: MuroService) { }

  ngOnInit() {
    if (localStorage.ingresado != null && localStorage.ingresado == 'true') {
      this.cargarHistorias();
    } else {
      this.router.navigate(['/']);
    }
    this.seleccion = "1";
  }

  cargarHistorias() {
    console.log("entro");
    this.muroServicio
      .getParametros()
      .pipe(first())
      .subscribe(
        historias =>{ this.publicaciones = historias; console.log(historias)},
        error => this.errorSe = error
      );

  }

  cerrarSesion() {
    localStorage.ingresado = false;
    this.router.navigate(['/']);
  }

}
