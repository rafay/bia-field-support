import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';
import * as moment from 'moment';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { LiteralMap } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AssetsService {

  public academyAssestDataSet: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public serviceInitialized = false;

  constructor(private httpClient: HttpClient) {

  }

  initializeService() {
    return this.getCompleteData();
  }

  getListOfSchoolsWithIssues() {

    return this.academyAssestDataSet.pipe(map((dataSet) => {
      if (dataSet) {
        let resultantDataSet = [];
        dataSet.forEach((dataItem) => {
          let devicesExceedingThreshold = _.filter(dataItem.devices, (dev) => {
            return dev.dailyAverageDischarge >= 30;
          })
          if (devicesExceedingThreshold.length > 0) {
            let resultDataItem = {
              academyId: dataItem.academyId,
              issueType: "Battery",
              count: devicesExceedingThreshold.length
            };
            resultantDataSet.push(resultDataItem);
          }
        })

        return resultantDataSet;
      }
    }));


  }

  getListOfDevicesWithBatteryConsumption(academyId: number) {
    return this.academyAssestDataSet.pipe(map((dataSet) => {
      if (dataSet) {
        let academyDataSet = _.find(dataSet, (ds) => { return ds.academyId === academyId });
        let resultantDataSet = _.map(academyDataSet.devices,(devData)=>{
          let dataItem = {
            academyId:academyId,
            serialNumber:devData.serialNumber,
            avgDailyDischarge:devData.dailyAverageDischarge
          };

          return dataItem;
        });
        return resultantDataSet;
      }
    }));
  }

  getCompleteData() {
    return this.httpClient.get('assets/schools_actual_data.json').pipe(map((dataSet) => {
      if (dataSet) {
        const academyIds = _.uniq((_.map(dataSet, (d: any) => { return d.academyId; })));

        let academyDataSet = [];

        _.forEach(academyIds, (academyId) => {
          let acadmeyData = {
            academyId: academyId,
            devices: []
          };

          const acadmeyDeviceData = _.filter(dataSet, function (d: any) { return d.academyId === academyId; });

          const uniqueDevices = _.uniq((_.map(acadmeyDeviceData, (aD: any) => { return aD.serialNumber; })));

          _.forEach(uniqueDevices, (devId: any) => {
            let deviceReadings = _.map(_.filter(acadmeyDeviceData, (d: any) => { return d.serialNumber === devId }), (devData) => {
              return { batteryLevel: devData.batteryLevel, timestamp: devData.timestamp };
            });

            let deviceData: any = {
              serialNumber: devId,
              readings: deviceReadings,
              dailyAverageDischarge: this.getDailyAverage(deviceReadings)
            }

            acadmeyData.devices.push(deviceData);
          });

          academyDataSet.push(acadmeyData);


        });

        this.academyAssestDataSet.next(academyDataSet);
        return academyDataSet;
      } else {
        return [];
      }
    }));
  }

  getDailyAverage(readings: any[]) {
    var dischargeAverages = [];

    if (readings.length > 1) {

      for (var i = 0; i < readings.length; i++) {
        var refIdx = i;
        var refVal = readings[refIdx]; //.batteryLevel;

        var k = i + 1;
        while (k < readings.length && readings[k].batteryLevel <= refVal.batteryLevel) {
          k++;
        }
        if (k == readings.length || readings[k].batteryLevel > refVal.batteryLevel) {
          k--;
        }

        i = k;

        if (k > refIdx) {
          var dischargeDiff = refVal.batteryLevel - readings[k].batteryLevel;
          var startTime = moment(refVal.timestamp);
          var endTime = moment(readings[k].timestamp);
          var timeDiff = endTime.diff(startTime, 'hours');
          if (dischargeDiff !== 0 && timeDiff !== 0) {
            var dailyAvg = ((24 * dischargeDiff) / timeDiff) * 100;
            dischargeAverages.push(dailyAvg);
          }

        }
      }
    }

    if (dischargeAverages.length) {
      let resultValue = (_.sum(dischargeAverages) / dischargeAverages.length).toFixed(2);
      return resultValue;//(_.sum(dischargeAverages) / dischargeAverages.length).toFixed(2);
    }
    else {
      return 0;
    }

  }

}
