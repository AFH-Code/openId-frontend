import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomtoastComponent } from './customtoast.component';

describe('CustomtoastComponent', () => {
  let component: CustomtoastComponent;
  let fixture: ComponentFixture<CustomtoastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomtoastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomtoastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
