import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-mis-noticias',
  templateUrl: 'mis-noticias.html'
})
export class MisNoticiasPage {
  buscarN: string = "";
  
  constructor(public alertCtrl: AlertController) {

  }

  buscarNoticias(){
    if(this.buscarN != ""){
      this.showAlert("Correcto", "No hay noticias disponibles.");
      
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
