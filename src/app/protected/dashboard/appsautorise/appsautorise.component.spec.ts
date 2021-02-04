import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsautoriseComponent } from './appsautorise.component';

describe('AppsautoriseComponent', () => {
  let component: AppsautoriseComponent;
  let fixture: ComponentFixture<AppsautoriseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppsautoriseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppsautoriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
