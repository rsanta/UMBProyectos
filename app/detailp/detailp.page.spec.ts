import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { detailpPage } from './detailp.page';

describe('detailpPage', () => {
  let component: detailpPage;
  let fixture: ComponentFixture<detailpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ detailpPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(detailpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
