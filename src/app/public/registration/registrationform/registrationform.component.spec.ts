import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RegistrationformComponent } from './registrationform.component';

describe('RegistrationformComponent', () => {
  let component: RegistrationformComponent;
  let fixture: ComponentFixture<RegistrationformComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
