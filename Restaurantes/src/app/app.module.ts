import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from "@angular/material/icon";
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RestauranteModule } from './restaurante/restaurante.module';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MensagemService} from './shared/services/mensagem.service';
import {MensagemSweetService} from './shared/services/mensagem-sweet.service';
import {IMensagem} from './shared/module/IMensagem';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatTabsModule,
    RestauranteModule,
    MatMenuModule,
    MatButtonModule,
    HttpClientModule,
    MatSidenavModule,
    MatListModule,
    MatSnackBarModule
  ],
  providers: [
    {
      provide: IMensagem,
      useClass: MensagemService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
