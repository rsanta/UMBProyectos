import { Component, OnInit } from '@angular/core';
import * as firebase from 'Firebase';
import { ActivatedRoute, Router  } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-crearp',
  templateUrl: './crearp.page.html',
  styleUrls: ['./crearp.page.scss'],
})
export class CrearpPage implements OnInit {

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
        'proy_problema' : [null, Validators.required],
        'proy_poblacionobjetivo' : [null, Validators.required],
        'proy_cantidadbeneficiarios' : [null, Validators.required],
        'proy_plantrabajo' : [null, null],
        'proy_duracionanalisis' : [null, null],
        'proy_duraciondiseno' : [null, null],
        'proy_duracionproyecto' : [null, Validators.required],
        'proy_presupuesto' : [null, Validators.required],
        'proy_valorproyecto' : [null, null],
        'proy_cantidadparticipantes' : [null, Validators.required],
        'proy_nombrelider' : [null, Validators.required],
        'proy_apellidolider' : [null, Validators.required],
        'proy_carreralider' : [null, Validators.required],
        'proy_semestrelider' : [null, Validators.required],
        'proy_correolider' : [null, Validators.required],
        'proy_celularlider' : [null, null],
        'proy_docente' : [null, Validators.required],
        'proy_fecharegistro' : [null, Validators.required],
        'proy_iporigen' : [null, null]

      });
    }

  ngOnInit() {
  }

  saveInfo() {
    let newInfo = firebase.database().ref('proyectos/').push();
    newInfo.set(this.infoForm.value);
    this.router.navigate(['/detailp/'+newInfo.key]);
  }

}
