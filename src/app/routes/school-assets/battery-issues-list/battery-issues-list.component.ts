import {Component, OnInit} from '@angular/core';
import {BatteryIssueRecord} from '../../../models/BatteryIssueRecord';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-battery-issues-list',
  templateUrl: './battery-issues-list.component.html',
  styleUrls: ['./battery-issues-list.component.scss']
})
export class BatteryIssuesListComponent implements OnInit {

  batteryIssues: BatteryIssueRecord[] = [
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
    }
  ];

  academyId: number;

  displayedColumns: string[] = ['academyId', 'serialNumber', 'avgDailyDischarge'];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        this.academyId = +params['academyId'];
      }
    );
  }

}
