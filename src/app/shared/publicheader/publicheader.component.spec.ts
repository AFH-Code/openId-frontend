import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PublicheaderComponent } from './publicheader.component';

describe('PublicheaderComponent', () => {
  let component: PublicheaderComponent;
  let fixture: ComponentFixture<PublicheaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
