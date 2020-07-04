import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitedlistXPage } from './invitedlist-x.page';

describe('InvitedlistXPage', () => {
  let component: InvitedlistXPage;
  let fixture: ComponentFixture<InvitedlistXPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitedlistXPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitedlistXPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
