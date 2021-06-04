import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalappliComponent } from './modalappli.component';

describe('ModalappliComponent', () => {
  let component: ModalappliComponent;
  let fixture: ComponentFixture<ModalappliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalappliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalappliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
