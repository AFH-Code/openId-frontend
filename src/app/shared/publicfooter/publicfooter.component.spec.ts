import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PublicfooterComponent } from './publicfooter.component';

describe('PublicfooterComponent', () => {
  let component: PublicfooterComponent;
  let fixture: ComponentFixture<PublicfooterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicfooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
