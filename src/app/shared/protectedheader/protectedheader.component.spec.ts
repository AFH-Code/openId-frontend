import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProtectedheaderComponent } from './protectedheader.component';

describe('ProtectedheaderComponent', () => {
  let component: ProtectedheaderComponent;
  let fixture: ComponentFixture<ProtectedheaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtectedheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtectedheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
