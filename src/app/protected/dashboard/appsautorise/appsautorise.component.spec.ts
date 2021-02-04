import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AppsautoriseComponent } from './appsautorise.component';

describe('AppsautoriseComponent', () => {
  let component: AppsautoriseComponent;
  let fixture: ComponentFixture<AppsautoriseComponent>;

  beforeEach(waitForAsync(() => {
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
