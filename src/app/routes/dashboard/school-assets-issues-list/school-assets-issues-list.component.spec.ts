import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolAssetsIssuesListComponent } from './school-assets-issues-list.component';

describe('SchoolAssetsIssuesListComponent', () => {
  let component: SchoolAssetsIssuesListComponent;
  let fixture: ComponentFixture<SchoolAssetsIssuesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolAssetsIssuesListComponent ]
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
