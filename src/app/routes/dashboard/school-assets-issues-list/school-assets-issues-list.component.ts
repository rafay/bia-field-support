import {Component, OnInit} from '@angular/core';
import {SchoolAssetsRrecord} from '../../../models/SchoolAssetsRrecord';
import {IssueTypes} from '../../../models/IssueTypes';

@Component({
  selector: 'app-school-assets-issues-list',
  templateUrl: './school-assets-issues-list.component.html',
  styleUrls: ['./school-assets-issues-list.component.scss']
})
export class SchoolAssetsIssuesListComponent implements OnInit {

  batteryIssuesList: SchoolAssetsRrecord[] = [
    {
      academyId: 30006,
      issueType: IssueTypes.BatteryIssue,
      count: 10
    },
    {
      academyId: 30007,
      issueType: IssueTypes.BatteryIssue,
      count: 20
    },
    {
      academyId: 30008,
      issueType: IssueTypes.BatteryIssue,
      count: 30
    }
  ];

  displayedColumns: string[] = ['academyId', 'issueType', 'count'];

  constructor() {
  }

  ngOnInit(): void {
  }

}
