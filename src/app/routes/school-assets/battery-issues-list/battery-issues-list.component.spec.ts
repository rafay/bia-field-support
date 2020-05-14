import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatteryIssuesListComponent } from './battery-issues-list.component';

describe('BatteryIssuesListComponent', () => {
  let component: BatteryIssuesListComponent;
  let fixture: ComponentFixture<BatteryIssuesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatteryIssuesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatteryIssuesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
