import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-mis-libros',
  templateUrl: 'mis-libros.html'
})
export class MisLibrosPage {
  buscarL: string = "";

  constructor(public alertCtrl: AlertController) {

  }

  buscarLibros(){
    if(this.buscarL != ""){
      this.showAlert("Correcto", "No hay libros disponibles.");
      
    } else{
      this.showAlert("Error", "Debe introducir algo en el campo de busqueda.");
    }
  }

  showAlert(titulo: string, subtitulo: string) {
    let alert = this.alertCtrl.create({
      title: titulo,
      subTitle: subtitulo,
      buttons: ['OK']
    });
    alert.present();
  }
}
