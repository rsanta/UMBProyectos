import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearpPage } from './crearp.page';

describe('CrearpPage', () => {
  let component: CrearpPage;
  let fixture: ComponentFixture<CrearpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearpPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should crearp', () => {
    expect(component).toBeTruthy();
  });
});
