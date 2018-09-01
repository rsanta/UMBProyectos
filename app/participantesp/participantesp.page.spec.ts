import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantespPage } from './participantesp.page';

describe('ParticipantespPage', () => {
  let component: ParticipantespPage;
  let fixture: ComponentFixture<ParticipantespPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipantespPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantespPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
