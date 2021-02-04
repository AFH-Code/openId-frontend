import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListecompteComponent } from './listecompte.component';

describe('ListecompteComponent', () => {
  let component: ListecompteComponent;
  let fixture: ComponentFixture<ListecompteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListecompteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListecompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
