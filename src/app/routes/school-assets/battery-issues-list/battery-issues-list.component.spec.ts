import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BatteryIssuesListComponent} from './battery-issues-list.component';
import {MaterialModule} from '../../../material.module';
import {of} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {AssetsService} from '../../../services/assets.service';
import {HighlightThresholdComponent} from '../../../shared/components/highlight-threshold/highlight-threshold.component';

const sampleData = [
  {
    academyId: 30006,
    serialNumber: 'TT-C67ML-A-0001-01429',
    avgDailyDischarge: 45
  },
  {
    academyId: 30006,
    serialNumber: 'TT-C67ML-A-0001-01444',
    avgDailyDischarge: 51
  },
  {
    academyId: 30006,
    serialNumber: 'NGTT-0944',
    avgDailyDischarge: 20
  },
  {
    academyId: 30008,
    serialNumber: 'NGTT-0945',
    avgDailyDischarge: 15
  }
];

describe('BatteryIssuesListComponent', () => {
  let component: BatteryIssuesListComponent;
  let fixture: ComponentFixture<BatteryIssuesListComponent>;
  let mockActivatedRoute;
  let mockAssetsService;

  beforeEach(async(() => {
    mockActivatedRoute = {
      params: of({academyId: 30006})
    };
    mockAssetsService = jasmine.createSpyObj(['getListOfDevicesWithBatteryConsumption']);
    mockAssetsService.getListOfDevicesWithBatteryConsumption.and.returnValue(of(sampleData));
    TestBed.configureTestingModule({
      declarations: [BatteryIssuesListComponent, HighlightThresholdComponent],
      imports: [MaterialModule],
      providers: [
        {provide: ActivatedRoute, useValue: mockActivatedRoute},
        {provide: AssetsService, useValue: mockAssetsService}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatteryIssuesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should read academyId from route params and assign to local variable', () => {
    expect(component.academyId).toBe(30006);
  });

  it('should render academyId in the heading', () => {
    expect(fixture.nativeElement.querySelectorAll('h1')[0].textContent).toContain('30006');
  });

  it('should render only 3 rows matching the academyId', () => {
    expect(fixture.nativeElement.querySelectorAll('mat-row').length).toEqual(3);
  });

  it('should have list in sorted order by IssueCount in descending order"', () => {
    expect(component.batteryIssues[0].avgDailyDischarge).toEqual(51);
    expect(component.batteryIssues[1].avgDailyDischarge).toEqual(45);
  });

  it('should have each row with 3 "mat-cell" elements', () => {
    expect(fixture.nativeElement.querySelectorAll('mat-row')[0].querySelectorAll('mat-cell').length).toEqual(3);
  });

  it('should render all properties in a row', () => {
    const matCells = fixture.nativeElement.querySelectorAll('mat-row')[0].querySelectorAll('mat-cell');

    expect(matCells[0].textContent).toContain('30006');
    expect(matCells[1].textContent).toContain('TT-C67ML-A-0001-01444');
    expect(matCells[2].textContent).toContain('51');
  });
});
