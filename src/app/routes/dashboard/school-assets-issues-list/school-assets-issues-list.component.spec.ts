import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SchoolAssetsIssuesListComponent} from './school-assets-issues-list.component';
import {AssetsService} from '../../../services/assets.service';
import {of} from 'rxjs';
import {MaterialModule} from '../../../material.module';
import {Directive, Input} from '@angular/core';
import {By} from '@angular/platform-browser';
import {MatRow} from '@angular/material/table';

const sampleData = [
  {
    academyId: 30006,
    issueType: 'Battery',
    count: 10
  },
  {
    academyId: 30007,
    issueType: 'Battery',
    count: 20
  },
  {
    academyId: 30008,
    issueType: 'Battery',
    count: 30
  }
];

@Directive({
  selector: '[routerLink]',
  host: {'(click)': 'onClick()'}
})
export class RouterLinkDirectiveStub {
  private _linkParams: any;
  @Input('routerLink')
  set linkParams(value: any) {
    this._linkParams = value;
  }

  get linkParams() {
    return this._linkParams;
  }

  navigatedTo: any = null;

  onClick() {
    this.navigatedTo = this.linkParams;
  }
}

describe('SchoolAssetsIssuesListComponent', () => {
  let component: SchoolAssetsIssuesListComponent;
  let fixture: ComponentFixture<SchoolAssetsIssuesListComponent>;
  let mockAssetsService;

  beforeEach(async(() => {
    mockAssetsService = jasmine.createSpyObj(['getListOfSchoolsWithIssues']);
    mockAssetsService.getListOfSchoolsWithIssues.and.returnValue(of(sampleData));
    TestBed.configureTestingModule({
      declarations: [
        SchoolAssetsIssuesListComponent,
        RouterLinkDirectiveStub
      ],
      imports: [MaterialModule],
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

  it('should assign list of items as returned from service to "batteryIssuesList"', () => {
    expect(component.schoolAssetsRrecords.length).toBe(3);
  });

  it('should have list in sorted order by IssueCount in descending order"', () => {
    expect(component.schoolAssetsRrecords[0].count).toEqual(30);
    expect(component.schoolAssetsRrecords[1].count).toEqual(20);
  });

  it('should render all items in "mat-row" element', () => {
    expect(fixture.nativeElement.querySelectorAll('mat-row').length).toEqual(3);
  });

  it('should have each row with 3 "mat-cell" elements', () => {
    expect(fixture.nativeElement.querySelectorAll('mat-row')[0].querySelectorAll('mat-cell').length).toEqual(3);
  });

  it('should render all properties in a row', () => {
    const matCells = fixture.nativeElement.querySelectorAll('mat-row')[0].querySelectorAll('mat-cell');

    expect(matCells[0].textContent).toContain('30008');
    expect(matCells[1].textContent).toContain('Battery');
    expect(matCells[2].textContent).toContain('30');
  });

  it('should have a "Details" link in each row', () => {
    const matRows = fixture.nativeElement.querySelectorAll('mat-row');

    expect(matRows[0].querySelectorAll('mat-cell')[2].textContent).toContain('Details');
  });

  it('should have correct route for the first row', () => {
    const matRows = fixture.debugElement.queryAll(By.directive(MatRow)); // nativeElement.querySelectorAll('mat-row');
    let routerLink = matRows[0].query(By.directive(RouterLinkDirectiveStub))
      .injector.get(RouterLinkDirectiveStub);

    matRows[0].query(By.css('a')).triggerEventHandler('click', null);
    expect(routerLink.navigatedTo).toBe('/school-assets/battery-issues/30008');

  });
});
