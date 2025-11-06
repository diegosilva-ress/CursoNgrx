import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CadastroUsuariosComponent } from './cadastro-usuarios/cadastro-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarUsuariosComponent,
    MainComponent,
    CadastroUsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
