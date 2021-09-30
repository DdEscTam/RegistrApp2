import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formlogin: FormGroup;

  constructor(public fb:FormBuilder,
    public alertController:AlertController,
    public nav: NavController) { 

    this.formlogin = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'pass': new FormControl("",Validators.required),
    })
  }

  ngOnInit() {
  }

  async ingresar(){
    var f = this.formlogin.value;

    var usuario = JSON.parse(localStorage.getItem('usuario'));

    if(usuario.nombre == f.nombre && usuario.pass == f.pass){
      console.log('Ingresado');
      localStorage.setItem('ingresado','true');
      this.nav.navigateRoot('asistencia');
    }else{
      const alert = await this.alertController.create({
        message: 'Datos incorrectos, intente nuevamente',
        buttons: ['Aceptar']
      })

      await alert.present();
    }
  }

}
