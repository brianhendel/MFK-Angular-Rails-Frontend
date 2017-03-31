import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundDashboardComponent } from './round-dashboard.component';

describe('RoundDashboardComponent', () => {
  let component: RoundDashboardComponent;
  let fixture: ComponentFixture<RoundDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoundDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
