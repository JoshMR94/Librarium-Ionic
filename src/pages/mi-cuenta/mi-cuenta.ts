import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-mi-cuenta',
  templateUrl: 'mi-cuenta.html'
})
export class MiCuentaPage {
  user: string = "";
  pass: string = "";

  constructor(public alertCtrl: AlertController) {

  }

  iniciarSesion(){
    if(this.user != "" && this.pass != ""){
      this.showAlert("Correcto", "Sesion iniciada.")
    } else{
      this.showAlert("Error", "Debe introducir un usuario y contraseña validos.");
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
