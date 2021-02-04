import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProtectedfooterComponent } from './protectedfooter.component';

describe('ProtectedfooterComponent', () => {
  let component: ProtectedfooterComponent;
  let fixture: ComponentFixture<ProtectedfooterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtectedfooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtectedfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
