import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DevelopperComponent } from './developper.component';

describe('DevelopperComponent', () => {
  let component: DevelopperComponent;
  let fixture: ComponentFixture<DevelopperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DevelopperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
