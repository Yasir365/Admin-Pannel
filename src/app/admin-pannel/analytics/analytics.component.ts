import { Component, OnInit } from '@angular/core';
import { LoaderOptionsObject } from '../shared/loader.interface';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {
  analyticsData: any[] = [];
  filter!: any
  loaderOptions: LoaderOptionsObject = {
    rows: 7,
    cols: 11,
    colSpans: {
      0: 1
    }
  }
  dataFetching = true;
  selectedItems: any[] = [];
  selectAll: boolean = false;

  constructor() {
    this.filter = {
      minVisitors: '',
      maxVisitors: '',
      minConversionRate: '',
      maxConversionRate: ''
    }
  }

  ngOnInit() {
    setTimeout(() => {
      this.dataFetching = false;
      this.analyticsData = [
        { selected: false,id: 1, date: '2022-01-01', visitors: 1000, pageViews: 5000, bounceRate: 40, sessionDuration: '00:05:30', conversionRate: 5, revenue: 10000, newUsers: 800, returningUsers: 200 },
        { selected: false,id: 2, date: '2022-01-02', visitors: 1200, pageViews: 5500, bounceRate: 35, sessionDuration: '00:06:00', conversionRate: 6, revenue: 11000, newUsers: 900, returningUsers: 300 },
        { selected: false,id: 3, date: '2022-01-03', visitors: 1300, pageViews: 6000, bounceRate: 30, sessionDuration: '00:06:30', conversionRate: 7, revenue: 12000, newUsers: 1000, returningUsers: 300 },
        { selected: false,id: 4, date: '2022-01-04', visitors: 1100, pageViews: 4800, bounceRate: 42, sessionDuration: '00:05:00', conversionRate: 4, revenue: 9500, newUsers: 750, returningUsers: 350 },
        { selected: false,id: 5, date: '2022-01-05', visitors: 1050, pageViews: 5200, bounceRate: 38, sessionDuration: '00:06:20', conversionRate: 6.5, revenue: 10500, newUsers: 850, returningUsers: 200 },
        { selected: false,id: 6, date: '2022-01-06', visitors: 1400, pageViews: 5800, bounceRate: 33, sessionDuration: '00:06:50', conversionRate: 7.5, revenue: 12500, newUsers: 1100, returningUsers: 300 },
        { selected: false,id: 7, date: '2022-01-07', visitors: 1250, pageViews: 5400, bounceRate: 36, sessionDuration: '00:07:00', conversionRate: 8, revenue: 13000, newUsers: 1050, returningUsers: 200 },
        { selected: false,id: 8, date: '2022-01-08', visitors: 1150, pageViews: 5100, bounceRate: 39, sessionDuration: '00:05:40', conversionRate: 5.5, revenue: 9900, newUsers: 800, returningUsers: 350 },
        { selected: false,id: 9, date: '2022-01-09', visitors: 1220, pageViews: 5700, bounceRate: 34, sessionDuration: '00:06:10', conversionRate: 6.2, revenue: 10700, newUsers: 950, returningUsers: 270 },
        { selected: false,id: 10, date: '2022-01-15', visitors: 1250, pageViews: 5600, bounceRate: 35, sessionDuration: '00:07:10', conversionRate: 7.7, revenue: 12600, newUsers: 1050, returningUsers: 200 }
      ];
    }, 3000);
  }

  downloadCsv() {

  }

  downloadPdf() {
    let a: any = document.getElementById('tableData');
    html2canvas(a).then((canvas: any) => {
      const contentDataUrl = canvas.toDataURL('image/png');
      let pdf = new jsPDF('p', 'mm', 'a4');
      let width = pdf.internal.pageSize.getWidth();
      let height = canvas.height * width / canvas.width;
      pdf.addImage(contentDataUrl, 'PNG', 0, 0, width, height);
      pdf.save('analytics.pdf');
    })

  }


  toggleSelectAll() {    
    this.analyticsData.forEach(item => item.selected = this.selectAll);
    if(this.selectAll) {
      this.selectedItems =[...this.analyticsData];
    }else{
      this.selectedItems = [];
    }
    console.log('Selected items:', this.selectedItems);
  }

  toggleSelection(index: number) {
    if(this.analyticsData[index].selected) {
      this.selectedItems.push(this.analyticsData[index]);
    }else{
      this.selectedItems.splice(this.selectedItems.indexOf(this.analyticsData[index]), 1);
    }
    console.log('Selected items:', this.selectedItems);
  }

  

}
