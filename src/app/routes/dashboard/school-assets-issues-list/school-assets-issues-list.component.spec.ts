import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SchoolAssetsIssuesListComponent} from './school-assets-issues-list.component';
import {AssetsService} from '../../../services/assets.service';
import {of} from 'rxjs';

describe('SchoolAssetsIssuesListComponent', () => {
  let component: SchoolAssetsIssuesListComponent;
  let fixture: ComponentFixture<SchoolAssetsIssuesListComponent>;
  let mockAssetsService;

  beforeEach(async(() => {
    mockAssetsService = jasmine.createSpyObj(['getListOfSchoolsWithIssues']);
    mockAssetsService.getListOfSchoolsWithIssues.and.returnValue(of([]));
    TestBed.configureTestingModule({
      declarations: [SchoolAssetsIssuesListComponent],
      providers: [
        {provide: AssetsService, useValue: mockAssetsService}
      ]
    })
      .compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolAssetsIssuesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
