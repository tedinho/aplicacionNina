import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistroFormComponent } from './registro-form/registro-form.component';
import { AvisoComponent } from './aviso/aviso.component';
import { MuroComponent } from './muro/muro.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SubirFormComponent } from './subir-form/subir-form.component';


const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'registroForm', component: RegistroFormComponent },
  { path: 'aviso', component: AvisoComponent },
  { path: 'muro', component: MuroComponent },
  { path: 'subidaForm', component: SubirFormComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroFormComponent,
    AvisoComponent,
    MuroComponent,
    SubirFormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
