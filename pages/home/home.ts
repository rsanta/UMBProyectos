import { Component } from '@angular/core';
import { NavController, AlertController  } from 'ionic-angular';
import { ConsultarpPage } from '../consultarp/consultarp';
import { EditarpPage } from '../editarp/editarp';

import { DeletepPage } from '../deletep/deletep';
import { ParticipantespPage } from '../participantesp/participantesp';
import { ListaparticipantespPage } from '../listaparticipantesp/listaparticipantesp';

import * as firebase from 'Firebase';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  ref = firebase.database().ref('proyectos/');
  items = [];

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
  ) {
        this.ref.on('value', resp => {
        this.items = [];
        this.items = snapshotToArray(resp);
      });   
  } 
  
  crearp(){
    let newItemModal = this.alertCtrl.create({
      title: 'Nuevo Proyecto UMB',
      message: "Datos del proyecto",
      inputs: [
        {
          name: 'proy_title',
          placeholder: 'Título'
        },{
          name: 'proy_description',
          placeholder: 'Descripción'
        },{
          name: 'proy_nombrelider',
          placeholder: 'Nombre líder'
        },{
          name: 'proy_apellidolider',
          placeholder: 'Apellido líder'
        },{
          name: 'proy_carreralider',
          placeholder: 'Programa'
        },{
          name: 'proy_semestrelider',
          placeholder: 'Semestre'
        },{
          name: 'proy_correolider',
          placeholder: 'Correo'
        },{
          name: 'proy_celularlider',
          placeholder: 'Celular'
        },{
          name: 'proy_docente',
          placeholder: 'Docente'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Grabar',
          handler: data => {
            this.ref.push({
              proy_title: data.proy_title,
              proy_description: data.proy_description,
              proy_nombrelider: data.proy_nombrelider,
              proy_apellidolider: data.proy_apellidolider,
              proy_carreralider: data.proy_carreralider,
              proy_semestrelider: data.proy_semestrelider,
              proy_correolider: data.proy_correolider,
              proy_celularlider: data.proy_celularlider,
              proy_docente: data.proy_docente
            });
          }
        }
      ]
    });
    newItemModal.present( newItemModal );
  }

  consultarp(key){
    this.navCtrl.push(ConsultarpPage,{param1 : key});
  }

  editp(key){
    this.navCtrl.push(EditarpPage,{param1 : key});
  }

  // deletep(key){
  //   //this.navCtrl.push(DeletepPage,{param1 : key});
  async deletep(key) {
    const alert = await this.alertCtrl.create({
      title: '¡ Confirmar !',
      message: 'Realmente desea eliminar este proyecto?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('cancel');
          }
        }, {
          text: 'Eliminar',
          handler: () => {
            firebase.database().ref('proyectos/'+key).remove();
          }
        }
      ]
    });

    await alert.present();
  }
  

  participantesp(key){
    this.navCtrl.push(ParticipantespPage,{param1 : key});
  }

  listaparticipantesp(key){
    this.navCtrl.push(ListaparticipantespPage,{param1 : key});
  }





}

export const snapshotToArray = snapshot => {
  let returnArr = [];

  snapshot.forEach(childSnapshot => {
      let item = childSnapshot.val();
      item.key = childSnapshot.key;
      returnArr.push(item);
  });

  return returnArr;
}
