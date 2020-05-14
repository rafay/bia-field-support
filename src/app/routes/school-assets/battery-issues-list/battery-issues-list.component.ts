import {Component, OnInit} from '@angular/core';
import {BatteryIssueRecord} from '../../../models/BatteryIssueRecord';
import {ActivatedRoute} from '@angular/router';
import {AssetsService} from '../../../services/assets.service';

@Component({
  selector: 'app-battery-issues-list',
  templateUrl: './battery-issues-list.component.html',
  styleUrls: ['./battery-issues-list.component.scss']
})
export class BatteryIssuesListComponent implements OnInit {

  batteryIssues: BatteryIssueRecord[] = [];

  academyId: number;

  displayedColumns: string[] = ['academyId', 'serialNumber', 'avgDailyDischarge'];

  constructor(private route: ActivatedRoute, private assetsService: AssetsService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        if (params.academyId) {
          this.academyId = +params.academyId;
          this.populateData();
        }
      }
    );
  }

  populateData() {
    this.assetsService.getListOfDevicesWithBatteryConsumption()
      .subscribe((data: BatteryIssueRecord[]) => {
        data = data.filter((d) => {
          return d.academyId === this.academyId;
        });

        data = data.sort((a, b) => {
          return b.avgDailyDischarge - a.avgDailyDischarge;
        });

        this.batteryIssues = data;
      });
  }

}
