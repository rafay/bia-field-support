import { TestBed } from '@angular/core/testing';

import { AssetsService } from './assets.service';
import { HttpClient } from '@angular/common/http';

const SAMPLE_READINGS = [
  {
    "batteryLevel": 0.68,
    "timestamp": "2019-05-17T07:47:25.833+01:00"
  },
  {
    "batteryLevel": 0.67,
    "timestamp": "2019-05-17T08:03:12.135+01:00"
  },
  {
    "batteryLevel": 0.67,
    "timestamp": "2019-05-17T08:27:56.965+01:00"
  },
  {
    "batteryLevel": 0.66,
    "timestamp": "2019-05-17T09:04:25.902+01:00"
  },
  {
    "batteryLevel": 0.66,
    "timestamp": "2019-05-17T09:58:13.461+01:00"
  },
  {
    "batteryLevel": 0.65,
    "timestamp": "2019-05-17T10:40:08.711+01:00"
  },
  {
    "batteryLevel": 0.64,
    "timestamp": "2019-05-17T11:26:53.907+01:00"
  },
  {
    "batteryLevel": 0.63,
    "timestamp": "2019-05-17T12:40:07.749+01:00"
  },
  {
    "batteryLevel": 0.62,
    "timestamp": "2019-05-17T13:12:43.521+01:00"
  },
  {
    "batteryLevel": 0.61,
    "timestamp": "2019-05-17T13:52:26.574+01:00"
  },
  {
    "batteryLevel": 0.61,
    "timestamp": "2019-05-17T14:20:53.061+01:00"
  },
  {
    "batteryLevel": 0.54,
    "timestamp": "2019-05-20T07:57:13.125+01:00"
  },
  {
    "batteryLevel": 0.54,
    "timestamp": "2019-05-20T08:25:17.78+01:00"
  },
  {
    "batteryLevel": 0.53,
    "timestamp": "2019-05-20T09:05:59.418+01:00"
  },
  {
    "batteryLevel": 0.5,
    "timestamp": "2019-05-20T10:11:54.361+01:00"
  },
  {
    "batteryLevel": 0.49,
    "timestamp": "2019-05-20T10:55:06.997+01:00"
  },
  {
    "batteryLevel": 0.45,
    "timestamp": "2019-05-20T12:25:48.675+01:00"
  },
  {
    "batteryLevel": 0.42,
    "timestamp": "2019-05-20T13:10:59.022+01:00"
  },
  {
    "batteryLevel": 0.4,
    "timestamp": "2019-05-20T13:41:18.151+01:00"
  },
  {
    "batteryLevel": 0.38,
    "timestamp": "2019-05-20T14:10:07.384+01:00"
  },
  {
    "batteryLevel": 0.34,
    "timestamp": "2019-05-20T15:03:38.466+01:00"
  },
  {
    "batteryLevel": 0.3,
    "timestamp": "2019-05-20T15:40:42.901+01:00"
  },
  {
    "batteryLevel": 0.26,
    "timestamp": "2019-05-20T16:20:53.978+01:00"
  },
  {
    "batteryLevel": 0.23,
    "timestamp": "2019-05-20T17:00:20.551+01:00"
  },
  {
    "batteryLevel": 0.99,
    "timestamp": "2019-05-21T07:40:56.526+01:00"
  },
  {
    "batteryLevel": 0.99,
    "timestamp": "2019-05-21T08:02:37.563+01:00"
  },
  {
    "batteryLevel": 0.98,
    "timestamp": "2019-05-21T08:06:18.551+01:00"
  },
  {
    "batteryLevel": 0.98,
    "timestamp": "2019-05-21T08:25:07.052+01:00"
  },
  {
    "batteryLevel": 0.97,
    "timestamp": "2019-05-21T09:12:59.502+01:00"
  },
  {
    "batteryLevel": 0.96,
    "timestamp": "2019-05-21T10:11:53.418+01:00"
  },
  {
    "batteryLevel": 0.95,
    "timestamp": "2019-05-21T10:55:21.182+01:00"
  }
];

describe('AssetsService', () => {
  let service: AssetsService;
  let mockHttpService;

  beforeEach(() => {
    mockHttpService = jasmine.createSpyObj(['get']);
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useValue: mockHttpService }
      ]
    });
    service = TestBed.inject(AssetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should calculate average batery discharge from given set of values correctly', () => {
    let averageBatteryDailyDischarge = service.getDailyAverage(SAMPLE_READINGS);

    expect(averageBatteryDailyDischarge).toBe("22.67");
  })
});
