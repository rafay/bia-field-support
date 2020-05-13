import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatteryIssuesComponent } from './battery-issues.component';

describe('BatteryIssuesComponent', () => {
  let component: BatteryIssuesComponent;
  let fixture: ComponentFixture<BatteryIssuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatteryIssuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatteryIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
