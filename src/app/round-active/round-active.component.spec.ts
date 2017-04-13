import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundActiveComponent } from './round-active.component';

describe('RoundActiveComponent', () => {
  let component: RoundActiveComponent;
  let fixture: ComponentFixture<RoundActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoundActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
