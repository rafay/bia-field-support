import {Component, OnInit} from '@angular/core';
import {SchoolAssetsRrecord} from '../../../models/SchoolAssetsRrecord';
import {IssueTypes} from '../../../models/IssueTypes';
import {AssetsService} from '../../../services/assets.service';

@Component({
  selector: 'app-school-assets-issues-list',
  templateUrl: './school-assets-issues-list.component.html',
  styleUrls: ['./school-assets-issues-list.component.scss']
})
export class SchoolAssetsIssuesListComponent implements OnInit {

  schoolAssetsRrecords: SchoolAssetsRrecord[] = [];

  displayedColumns: string[] = ['academyId', 'issueType', 'count'];

  constructor(private assetsService: AssetsService) {
  }

  ngOnInit(): void {
    this.assetsService.getListOfSchoolsWithIssues()
      .subscribe((data: any) => {
        data = data.sort((a, b) => {
          return b.count - a.count;
        });
        this.schoolAssetsRrecords = data;
      });
  }

}
