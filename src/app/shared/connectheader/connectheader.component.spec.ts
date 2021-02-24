import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectheaderComponent } from './connectheader.component';

describe('ConnectheaderComponent', () => {
  let component: ConnectheaderComponent;
  let fixture: ComponentFixture<ConnectheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
