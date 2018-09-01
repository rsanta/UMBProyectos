import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpPage } from './editp.page';

describe('EditpPage', () => {
  let component: EditpPage;
  let fixture: ComponentFixture<EditpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditpPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
