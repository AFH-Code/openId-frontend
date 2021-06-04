import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailappliComponent } from './detailappli.component';

describe('DetailappliComponent', () => {
  let component: DetailappliComponent;
  let fixture: ComponentFixture<DetailappliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailappliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailappliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
