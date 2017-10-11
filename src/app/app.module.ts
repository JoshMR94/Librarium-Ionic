import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { InicioPage } from '../pages/inicio/inicio';
import { MisNoticiasPage } from '../pages/mis-noticias/mis-noticias';
import { MisLibrosPage } from '../pages/mis-libros/mis-libros';
import { MisAutoresPage } from '../pages/mis-autores/mis-autores';
import { MiCuentaPage } from '../pages/mi-cuenta/mi-cuenta';
import { MiConfiguracionPage } from '../pages/mi-configuracion/mi-configuracion';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    InicioPage,
    MisNoticiasPage,
    MisLibrosPage,
    MisAutoresPage,
    MiCuentaPage,
    MiConfiguracionPage,
    ItemDetailsPage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InicioPage,
    MisNoticiasPage,
    MisLibrosPage,
    MisAutoresPage,
    MiCuentaPage,
    MiConfiguracionPage,
    ItemDetailsPage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
