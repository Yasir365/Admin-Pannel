import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {
  analyticsData: any[] = [];
  filter!: any
  btnDisable: boolean = true

  constructor() {
    this.analyticsData = [
      { id: 1, date: '2022-01-01', visitors: 1000, pageViews: 5000, bounceRate: 40, sessionDuration: '00:05:30', conversionRate: 5, revenue: 10000, newUsers: 800, returningUsers: 200 },
      { id: 2, date: '2022-01-02', visitors: 1200, pageViews: 5500, bounceRate: 35, sessionDuration: '00:06:00', conversionRate: 6, revenue: 11000, newUsers: 900, returningUsers: 300 },
      { id: 3, date: '2022-01-03', visitors: 1300, pageViews: 6000, bounceRate: 30, sessionDuration: '00:06:30', conversionRate: 7, revenue: 12000, newUsers: 1000, returningUsers: 300 },
      { id: 4, date: '2022-01-04', visitors: 1100, pageViews: 4800, bounceRate: 42, sessionDuration: '00:05:00', conversionRate: 4, revenue: 9500, newUsers: 750, returningUsers: 350 },
      { id: 5, date: '2022-01-05', visitors: 1050, pageViews: 5200, bounceRate: 38, sessionDuration: '00:06:20', conversionRate: 6.5, revenue: 10500, newUsers: 850, returningUsers: 200 },
      { id: 6, date: '2022-01-06', visitors: 1400, pageViews: 5800, bounceRate: 33, sessionDuration: '00:06:50', conversionRate: 7.5, revenue: 12500, newUsers: 1100, returningUsers: 300 },
      { id: 7, date: '2022-01-07', visitors: 1250, pageViews: 5400, bounceRate: 36, sessionDuration: '00:07:00', conversionRate: 8, revenue: 13000, newUsers: 1050, returningUsers: 200 },
      { id: 8, date: '2022-01-08', visitors: 1150, pageViews: 5100, bounceRate: 39, sessionDuration: '00:05:40', conversionRate: 5.5, revenue: 9900, newUsers: 800, returningUsers: 350 },
      { id: 9, date: '2022-01-09', visitors: 1220, pageViews: 5700, bounceRate: 34, sessionDuration: '00:06:10', conversionRate: 6.2, revenue: 10700, newUsers: 950, returningUsers: 270 },
      { id: 10, date: '2022-01-10', visitors: 1350, pageViews: 6200, bounceRate: 31, sessionDuration: '00:06:40', conversionRate: 7.2, revenue: 11800, newUsers: 1050, returningUsers: 300 },
      { id: 11, date: '2022-01-11', visitors: 1120, pageViews: 4900, bounceRate: 41, sessionDuration: '00:05:20', conversionRate: 4.8, revenue: 9300, newUsers: 750, returningUsers: 370 },
      { id: 12, date: '2022-01-12', visitors: 1180, pageViews: 5300, bounceRate: 37, sessionDuration: '00:05:50', conversionRate: 5.8, revenue: 10100, newUsers: 850, returningUsers: 330 },
      { id: 13, date: '2022-01-13', visitors: 1280, pageViews: 5800, bounceRate: 32, sessionDuration: '00:06:20', conversionRate: 6.8, revenue: 11300, newUsers: 950, returningUsers: 330 },
      { id: 14, date: '2022-01-14', visitors: 1320, pageViews: 6100, bounceRate: 29, sessionDuration: '00:06:50', conversionRate: 7.3, revenue: 11900, newUsers: 1000, returningUsers: 320 },
      { id: 15, date: '2022-01-15', visitors: 1250, pageViews: 5600, bounceRate: 35, sessionDuration: '00:07:10', conversionRate: 7.7, revenue: 12600, newUsers: 1050, returningUsers: 200 }
    ];

    this.filter = {
      minVisitors: '',
      maxVisitors: '',
      minConversionRate: '',
      maxConversionRate: ''
    }
  }

  ngOnInit() {
  }

  changeFilter() {
    if (this.filter.minVisitors != null && this.filter.maxVisitors != null && this.filter.minConversionRate != null && this.filter.maxConversionRate != null) {
      this.btnDisable = false;
    } else {
      this.btnDisable = true;
    }
  }

}
