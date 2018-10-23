import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'Firebase';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, FormArray } from '@angular/forms';

import { ListaparticipantespPage } from '../listaparticipantesp/listaparticipantesp';

/**
 * Generated class for the ParticipantespPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-participantesp',
  templateUrl: 'participantesp.html',
})
export class ParticipantespPage {

  ref = firebase.database().ref('proyectos/');
  infoForm: FormGroup;
  private key : string ;

  constructor(public navCtrl: NavController, public navParams: NavParams,  private formBuilder: FormBuilder) {
    this.key = this.navParams.get("param1");
    this.infoForm = this.formBuilder.group({
      'proy_nombre' : [null, Validators.required],
      'proy_apellido' : [null, Validators.required],
      'proy_carrera' : [null, Validators.required],
      'proy_semestre' : [null, Validators.required],
      'proy_correo' : [null, Validators.required],
      'proy_celular' : [null, null]
    });
    //this.getInfo(this.key);
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad ParticipantespPage');
  }

  getInfo(key) {
    firebase.database().ref('proyectos/'+this.key+'/participantes/').on('value', resp => {
      let info = snapshotToObject(resp);
      this.infoForm.controls['proy_nombre'].setValue(info.proy_nombre);
      this.infoForm.controls['proy_apellido'].setValue(info.proy_apellido);
      this.infoForm.controls['proy_carrera'].setValue(info.proy_carrera);
      this.infoForm.controls['proy_semestre'].setValue(info.proy_semestre);
      this.infoForm.controls['proy_correo'].setValue(info.proy_correo);
      this.infoForm.controls['proy_celular'].setValue(info.proy_celular);
    });
  }

  updateInfo() {  // actualiza el proyecto creando una nueva persona
    // actualiza los datos de la persona
    //let newInfo = firebase.database().ref('proyectos/'+this.route.snapshot.paramMap.get('key')+'/participantes/').update(this.infoForm.value);
    // this.router.navigate(['/detailp/'+this.route.snapshot.paramMap.get('key')]);

    firebase.database().ref('proyectos/'+this.key+'/participantes/').push(this.infoForm.value);
    // this.router.navigate(['/detailp/'+newInfo.key]);
    //this.router.navigate(['/detailp/'+this.route.snapshot.paramMap.get('key')]);
    this.navCtrl.push(ListaparticipantespPage,{param1 : this.key});

  }

}

export const snapshotToObject = snapshot => {
  let item = snapshot.val();
  item.key = snapshot.key;

  return item;
}
