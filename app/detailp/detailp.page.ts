import { Component, OnInit } from '@angular/core';
import * as firebase from 'Firebase';
import { ActivatedRoute, Router  } from '@angular/router';

@Component({
  selector: 'app-detailp',
  templateUrl: './detailp.page.html',
  styleUrls: ['./detailp.page.scss'],
})
export class DetailpPage implements OnInit {

  proyecto = {};

  constructor(private route: ActivatedRoute,
    public router: Router) {
    firebase.database().ref('proyectos/'+this.route.snapshot.paramMap.get('key')).on('value', resp => {
      this.proyecto = snapshotToObject(resp);
    });
  }

  ngOnInit() {
  }

}

export const snapshotToObject = snapshot => {
  let item = snapshot.val();
  item.key = snapshot.key;

  return item;
}
