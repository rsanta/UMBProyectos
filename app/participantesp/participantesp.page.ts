import { Component, OnInit } from '@angular/core';
import * as firebase from 'Firebase';
import { ActivatedRoute, Router  } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-participantesp',
  templateUrl: './participantesp.page.html',
  styleUrls: ['./participantesp.page.scss'],
})
export class ParticipantespPage implements OnInit {

  ref = firebase.database().ref('proyectos/');
  infoForm: FormGroup;

  constructor(private route: ActivatedRoute,
    public router: Router,
    private formBuilder: FormBuilder) {
      this.infoForm = this.formBuilder.group({
        'proy_nombre' : [null, Validators.required],
        'proy_apellido' : [null, Validators.required],
        'proy_carrera' : [null, Validators.required],
        'proy_semestre' : [null, Validators.required],
        'proy_correo' : [null, Validators.required],
        'proy_celular' : [null, null]
      });
      this.getInfo(this.route.snapshot.paramMap.get('key'));
    }

  ngOnInit() {
  }

  getInfo(key) {
    firebase.database().ref('proyectos/'+key+'/prticipantes/').on('value', resp => {
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

    let newInfo = firebase.database().ref('proyectos/'+this.route.snapshot.paramMap.get('key')+'/participantes/').push();
    newInfo.set(this.infoForm.value);
    // this.router.navigate(['/detailp/'+newInfo.key]);
    this.router.navigate(['/detailp/'+this.route.snapshot.paramMap.get('key')]);

  }

}

export const snapshotToObject = snapshot => {
  let item = snapshot.val();
  item.key = snapshot.key;

  return item;
}
