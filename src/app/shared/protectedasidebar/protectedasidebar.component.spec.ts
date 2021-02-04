import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProtectedasidebarComponent } from './protectedasidebar.component';

describe('ProtectedasidebarComponent', () => {
  let component: ProtectedasidebarComponent;
  let fixture: ComponentFixture<ProtectedasidebarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtectedasidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtectedasidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
