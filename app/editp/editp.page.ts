import { Component, OnInit } from '@angular/core';
import * as firebase from 'Firebase';
import { ActivatedRoute, Router  } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-editp',
  templateUrl: './editp.page.html',
  styleUrls: ['./editp.page.scss'],
})
export class EditpPage implements OnInit {

  ref = firebase.database().ref('proyectos/');
  infoForm: FormGroup;

  constructor(private route: ActivatedRoute,
    public router: Router,
    private formBuilder: FormBuilder) {
      this.infoForm = this.formBuilder.group({
        'proy_title' : [null, Validators.required],
        'proy_description' : [null, Validators.required],
        'proy_paginaweb' : [null, null],
        'proy_logo' : [null, null],
        'proy_poter' : [null, null],
        'proy_articuloieee' : [null, null],
        'proy_problema' : [null, null],
        'proy_poblacionobjetivo' : [null, null],
        'proy_cantidadbeneficiarios' : [null, null],
        'proy_plantrabajo' : [null, null],
        'proy_duracionanalisis' : [null, null],
        'proy_duraciondiseno' : [null, null],
        'proy_duracionproyecto' : [null, null],
        'proy_presupuesto' : [null, null],
        'proy_valorproyecto' : [null, null],
        'proy_cantidadparticipantes' : [null, null],
        'proy_nombrelider' : [null, Validators.required],
        'proy_apellidolider' : [null, Validators.required],
        'proy_carreralider' : [null, Validators.required],
        'proy_semestrelider' : [null, Validators.required],
        'proy_correolider' : [null, Validators.required],
        'proy_celularlider' : [null, null],
        'proy_docente' : [null, Validators.required]
      });
      this.getInfo(this.route.snapshot.paramMap.get('key'));
    }

  ngOnInit() {
  }

  getInfo(key) {
    firebase.database().ref('proyectos/'+key).on('value', resp => {
      let info = snapshotToObject(resp);
      this.infoForm.controls['proy_title'].setValue(info.proy_title);
      this.infoForm.controls['proy_description'].setValue(info.proy_description);
      this.infoForm.controls['proy_paginaweb'].setValue(info.proy_paginaweb);
      this.infoForm.controls['proy_logo'].setValue(info.proy_logo);
      this.infoForm.controls['proy_poter'].setValue(info.proy_poter);
      this.infoForm.controls['proy_articuloieee'].setValue(info.proy_articuloieee);
      this.infoForm.controls['proy_problema'].setValue(info.proy_problema);
      this.infoForm.controls['proy_poblacionobjetivo'].setValue(info.proy_poblacionobjetivo);
      this.infoForm.controls['proy_cantidadbeneficiarios'].setValue(info.proy_cantidadbeneficiarios);
      this.infoForm.controls['proy_plantrabajo'].setValue(info.proy_plantrabajo);
      this.infoForm.controls['proy_duracionanalisis'].setValue(info.proy_duracionanalisis);
      this.infoForm.controls['proy_duraciondiseno'].setValue(info.proy_duraciondiseno);
      this.infoForm.controls['proy_duracionproyecto'].setValue(info.proy_duracionproyecto);
      this.infoForm.controls['proy_presupuesto'].setValue(info.proy_presupuesto);
      this.infoForm.controls['proy_valorproyecto'].setValue(info.proy_valorproyecto);
      this.infoForm.controls['proy_cantidadparticipantes'].setValue(info.proy_cantidadparticipantes); 
      this.infoForm.controls['proy_nombrelider'].setValue(info.proy_nombrelider);
      this.infoForm.controls['proy_apellidolider'].setValue(info.proy_apellidolider);
      this.infoForm.controls['proy_carreralider'].setValue(info.proy_carreralider);
      this.infoForm.controls['proy_semestrelider'].setValue(info.proy_semestrelider);
      this.infoForm.controls['proy_correolider'].setValue(info.proy_correolider);
      this.infoForm.controls['proy_celularlider'].setValue(info.proy_celularlider);
      this.infoForm.controls['proy_docente'].setValue(info.proy_docente);

    });
  }

  updateInfo() {
    let newInfo = firebase.database().ref('proyectos/'+this.route.snapshot.paramMap.get('key')).update(this.infoForm.value);
    this.router.navigate(['/detail/'+this.route.snapshot.paramMap.get('key')]);
  }

}

export const snapshotToObject = snapshot => {
  let item = snapshot.val();
  item.key = snapshot.key;

  return item;
}
