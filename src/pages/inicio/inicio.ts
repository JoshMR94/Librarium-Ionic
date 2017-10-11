import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MisNoticiasPage } from '../mis-noticias/mis-noticias';
import { MisLibrosPage } from '../mis-libros/mis-libros';
import { MisAutoresPage } from '../mis-autores/mis-autores';

@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html'
})
export class InicioPage {
  constructor(public navCtrl: NavController) {

  }

  OnClickNoticias(){
    this.navCtrl.push(MisNoticiasPage);
  }

  OnClickMisLibros(){
    this.navCtrl.push(MisLibrosPage);
  }

  OnClickMisAutores(){
    this.navCtrl.push(MisAutoresPage);
  }
}
