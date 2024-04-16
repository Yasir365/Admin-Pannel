import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dragIconId!: number;
  dropTileId!: number;
  chartOptions1: any;
  chartOptions2: any;

  constructor() {
    this.chartOptions1 = {
      series: [
        {
          name: "Total users",
          data: [4,5,3,4,5,6,5,3,5,4,4,2]
        },
        {
          name: "Acive users",
          data: [2, 3, 2, 3, 2, 6, 3, 2, 3, 2, 3, 1]
        },
        {
          name: "Blocked users",
          data: [2, 2, 1, 1, 3, 0, 2, 1, 2, 2, 1, 1]
        }
      ],
      chart: {
        height: 410,
        type: "line",
        zoom: {
          enabled: false
        },
        background: '#fff',
        borderRadius: 50
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      title: {
        text: "Product Trends by Month",
        align: "left"
      },
      xaxis: {
        categories: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]
      }
    };


    this.chartOptions2 = {
      series: [105, 67, 38],
      chart: {
        height: 430,
        type: "radialBar",
        background: '#fff',
        borderRadius: 50,
        showlabel:true
      },
      // plotOptions: {
      //   radialBar: {
          // dataLabels: {
          //   name: {
          //     fontSize: "50px",
          //     color: "#000"
          //   },
          //   value: {
          //     fontSize: "16px"
          //   },
          //   total: {
          //     show: true,
          //     label: "Total",
          //     formatter: function(w:any) {
          //       return "249";
          //     }
          //   }
          // }
        // }
      // },
      labels: ["Total Orders", "Completed Users", "Pending Orders"],
    };
  }

  ngOnInit() {
  }
  public card_items = [
    { id: 0, name: "Total Users", value: 45, bg_color: "#FFC107" },
    { id: 1, name: "Active Users", value: 30, bg_color: "#0DCAF0" },
    { id: 2, name: "Blocked Users", value: 15, bg_color: "#F8F9FA" },
    { id: 3, name: "Total Orders", value: 105, bg_color: "#F7BAC5" },
    { id: 4, name: "Completed Orders", value: 67, bg_color: "#D2AA84" },
    { id: 5, name: "Pending Orders", value: 38, bg_color: "#11C15B" },
  ];

  public onIconDropped(ev: any) {
    ev.drag.dropFinished();
  }

  public onEnterHandler(ev: any): void {
    this.dropTileId = parseInt(ev.owner.element.nativeElement.id, 10);
    // the event gets raised immediately, but we want to swap only when we drag over another icon
    if (this.dragIconId === this.dropTileId) {
      return;
    }
    const dragIndex = this.card_items.findIndex((iconObj) => iconObj.id === this.dragIconId);
    const dropIndex = this.card_items.findIndex((iconObj) => iconObj.id === this.dropTileId);
    this.swapIcons(dragIndex, dropIndex);
  }

  public dragStartHandler(id: number): void {
    this.dragIconId = id;
  }

  public dragEndHandler(dragRef: HTMLElement) {
    dragRef.style.visibility = 'visible';
  }

  public ghostCreateHandler(dragRef: HTMLElement) {
    dragRef.style.visibility = 'hidden';
  }

  private swapIcons(dragIndex: number, dropIndex: number) {
    const tempObj = this.card_items[dragIndex];
    this.card_items.splice(dragIndex, 1);
    this.card_items.splice(dropIndex, 0, tempObj);
  }

}
