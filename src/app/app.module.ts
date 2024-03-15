// Importaciones de módulos necesarios desde Angular y otros archivos de la aplicación
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  // Declaración de componentes pertenecientes a este módulo
  declarations: [
    AppComponent,
    HomeComponent
  ],
  // Importación de otros módulos necesarios para el funcionamiento de la aplicación
  imports: [
    BrowserModule, // Módulo fundamental que contiene las directivas de Angular para la plataforma web
    AppRoutingModule, // Módulo de enrutamiento de la aplicación
    HttpClientModule, // Módulo para realizar solicitudes HTTP
    FormsModule, // Módulo para trabajar con formularios en Angular
  ],
  providers: [], // Proveedores de servicios utilizados en la aplicación
  bootstrap: [AppComponent] // Componente raíz que se inicia al arrancar la aplicación
})
export class AppModule { } // Clase que define el módulo principal de la aplicación Angular
