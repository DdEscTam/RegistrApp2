import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  formRegistro: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public nav: NavController) {
    this.formRegistro = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'pass': new FormControl("",Validators.required),
      'confirmacionpass': new FormControl("",Validators.required)
   });
  }

  ngOnInit() {
  }

  async guardar(){
    var f = this.formRegistro.value;

    if(this.formRegistro.invalid){
      const alert = await this.alertController.create({
        message: 'No pueden haber campos vacios',
        buttons: ['Aceptar']

      });
      await alert.present();
      return;
    }

    var usuario = {
      nombre: f.nombre,
      pass: f.pass
    }

    localStorage.setItem('usuario',JSON.stringify(usuario));

    localStorage.setItem('ingresado','true');
      this.nav.navigateRoot('login');

  }
  

}
