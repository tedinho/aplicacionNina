import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-form',
  templateUrl: './registro-form.component.html',
  styleUrls: ['./registro-form.component.css']
})
export class RegistroFormComponent implements OnInit {

  automatica: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
    this.automatica = false;
  }

  registrarse() {
    if (!this.automatica) {
      this.router.navigate(['/aviso']);
    } else {
      this.router.navigate(['/muro']);
    }
  }

}
