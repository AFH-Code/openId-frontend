import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListeAccountComponent } from './liste-account.component';

describe('ListeAccountComponent', () => {
  let component: ListeAccountComponent;
  let fixture: ComponentFixture<ListeAccountComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
