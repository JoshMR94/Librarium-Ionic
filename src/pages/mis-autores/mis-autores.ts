import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-mis-autores',
  templateUrl: 'mis-autores.html'
})
export class MisAutoresPage {
  autores;
  autoresCheckeados;

  constructor(public alertCtrl: AlertController) {
    this.inicializarAutores();
  }

  inicializarAutores() {
    this.autores = [
      'H.P. Lovecraft',
      'J.K. Rowling',
      'G.R.R. Martin'
    ];
  }

  getAutores(ev) {
    // Reset items back to all of the items
    this.inicializarAutores();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.autores = this.autores.filter((autor) => {
        return (autor.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  guardarAutores(){
      //guardar Autores en una lista en el futuro
      this.showAlert("Correcto", "Se ha guardado su selección.");
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
