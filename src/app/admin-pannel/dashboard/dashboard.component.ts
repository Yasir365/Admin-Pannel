import { AdminPannelService } from './../admin-pannel.service';
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
  card_items: any;
  chartOptions1: any;

  constructor(private adminPannelService: AdminPannelService) {
  }

  ngOnInit() {
    this.card_items = [
      { id: 0, name: "Users", value: 1155, bg_color: "#DE73FF" },
      { id: 1, name: "Categories", value: 2, bg_color: "#24E5A3" },
      { id: 2, name: "Products", value: 425, bg_color: "#FCB939" },
      { id: 3, name: "Sold", value: 250, bg_color: "#DE73FF" },
      { id: 4, name: "Pending", value: 155, bg_color: "#24E5A3" },
      { id: 5, name: "Cancelled", value: 20, bg_color: "#FCB939" },
    ];


    this.adminPannelService.getDarkModeData().subscribe((data: any) => {
      if (data) {
        this.chartOptions1 = {
          series: [
            {
              name: "Total users",
              data: [4, 5, 3, 4, 5, 6, 5, 3, 5, 4, 4, 2]
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
            background: '#3A3B3C',
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
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
          }
        };


      } else {
        this.chartOptions1 = {
          series: [
            {
              name: "Users",
              data: [4, 5, 3, 4, 5, 6, 5, 3, 5, 4, 4, 2]
            },
            {
              name: "Categories",
              data: [2, 3, 2, 3, 2, 6, 3, 2, 3, 2, 3, 1]
            },
            {
              name: "Products",
              data: [2, 2, 1, 1, 3, 0, 2, 1, 2, 2, 1, 1]
            },
            {
              name: "Sold",
              data: [2, 3, 2, 6, 3, 2, 3, 2, 3, 2, 3, 1]
            },
            {
              name: "Pending",
              data: [2, 2, 1, 1, 1, 2, 2, 1, 1, 3, 0, 2]
            },
            {
              name: "Cancelled",
              data: [3, 2, 3, 2,  2, 3, 2, 6, 3, 2, 3, 1]
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
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
          }
        };
      }
    })

  }

  onIconDropped(ev: any) {
    ev.drag.dropFinished();
  }

  onEnterHandler(ev: any): void {
    this.dropTileId = parseInt(ev.owner.element.nativeElement.id, 10);
    if (this.dragIconId === this.dropTileId) {
      return;
    }
    const dragIndex = this.card_items.findIndex((iconObj: any) => iconObj.id === this.dragIconId);
    const dropIndex = this.card_items.findIndex((iconObj: any) => iconObj.id === this.dropTileId);
    this.swapIcons(dragIndex, dropIndex);
  }

  dragStartHandler(id: number): void {
    this.dragIconId = id;
  }

  dragEndHandler(dragRef: HTMLElement) {
    dragRef.style.visibility = 'visible';
  }

  ghostCreateHandler(dragRef: HTMLElement) {
    dragRef.style.visibility = 'hidden';
  }

  swapIcons(dragIndex: number, dropIndex: number) {
    const tempObj = this.card_items[dragIndex];
    this.card_items.splice(dragIndex, 1);
    this.card_items.splice(dropIndex, 0, tempObj);
  }

}
