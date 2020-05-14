import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BatteryIssuesListComponent} from './battery-issues-list.component';
import {MaterialModule} from '../../../material.module';
import {of} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {AssetsService} from '../../../services/assets.service';

describe('BatteryIssuesListComponent', () => {
  let component: BatteryIssuesListComponent;
  let fixture: ComponentFixture<BatteryIssuesListComponent>;
  let mockActivatedRoute;
  let mockAssetsService;

  beforeEach(async(() => {
    mockActivatedRoute = {
      params: of({params: {academyId: 30006}})
    };
    mockAssetsService = jasmine.createSpyObj(['getListOfDevicesWithBatteryConsumption']);
    TestBed.configureTestingModule({
      declarations: [BatteryIssuesListComponent],
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
