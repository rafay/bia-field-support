import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolAssetIssueComponent } from './school-asset-issue.component';

describe('SchoolAssetIssueComponent', () => {
  let component: SchoolAssetIssueComponent;
  let fixture: ComponentFixture<SchoolAssetIssueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolAssetIssueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolAssetIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
