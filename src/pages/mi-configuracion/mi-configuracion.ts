import { Component } from '@angular/core';
import { ToastController, Toggle } from 'ionic-angular';

@Component({
  selector: 'page-mi-configuracion',
  templateUrl: 'mi-configuracion.html'
})
export class MiConfiguracionPage {

  notificaciones: Toggle;
  recomendaciones: Toggle;
  sesion: Toggle;

  constructor(public toastCtrl: ToastController) {

  }

  guardarConfiguracion(){
    if(this.notificaciones != undefined || this.recomendaciones != undefined 
        || this.sesion != undefined){
          this.showToast("bottom");
    } else {
      this.showToastUndefined("bottom");
    }
  }

  showToast(position: string) {
    let toast = this.toastCtrl.create({
      message: 'Configuracion Guardada',
      duration: 2000,
      position: position
    });

    toast.present(toast);
  }

  showToastUndefined(position: string) {
    let toast = this.toastCtrl.create({
      message: 'Debe seleccionar alguna opción',
      duration: 2000,
      position: position
    });

    toast.present(toast);
  }
}
