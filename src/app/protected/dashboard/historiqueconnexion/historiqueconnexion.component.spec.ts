import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HistoriqueconnexionComponent } from './historiqueconnexion.component';

describe('HistoriqueconnexionComponent', () => {
  let component: HistoriqueconnexionComponent;
  let fixture: ComponentFixture<HistoriqueconnexionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriqueconnexionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriqueconnexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
