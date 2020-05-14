import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AssetsService {

  constructor(private httpClient: HttpClient) {
  }

  getListOfSchoolsWithIssues() {
    return this.httpClient.get('assets/schools_assets_issues.json');
  }

  getListOfDevicesWithBatteryConsumption(){
    return this.httpClient.get('assets/schools_avg_battery_data.json');
  }

}
