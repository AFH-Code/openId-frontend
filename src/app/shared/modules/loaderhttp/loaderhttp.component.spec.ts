import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderhttpComponent } from './loaderhttp.component';

describe('LoaderhttpComponent', () => {
  let component: LoaderhttpComponent;
  let fixture: ComponentFixture<LoaderhttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoaderhttpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderhttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
