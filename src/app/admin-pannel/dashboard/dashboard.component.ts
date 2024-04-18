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
  chartOptions2: any;
  chartOptions3: any;
  chartOptions4: any;

  constructor(private adminPannelService: AdminPannelService) {
  }

  ngOnInit() {
    this.card_items = [
      { id: 0, name: "Total Users", value: 45, bg_color: "#DE73FF" },
      { id: 1, name: "Active Users", value: 30, bg_color: "#24E5A3" },
      { id: 2, name: "Blocked Users", value: 15, bg_color: "#FCB939" },
      { id: 3, name: "Total Orders", value: 105, bg_color: "#DE73FF" },
      { id: 4, name: "Completed Orders", value: 67, bg_color: "#24E5A3" },
      { id: 5, name: "Pending Orders", value: 38, bg_color: "#FCB939" },
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


        this.chartOptions2 = {
          series: [105, 67, 38],
          chart: {
            height: 430,
            type: "radialBar",
            background: '#3A3B3C',
            showlabel: true
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


        this.chartOptions3 = {
          series: [
            {
              name: "Inflation",
              data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
            }
          ],
          chart: {
            height: 410,
            type: "bar",
            background: '#3A3B3C',
          },
          plotOptions: {
            bar: {
              dataLabels: {
                position: "top" // top, center, bottom
              }
            }
          },
          dataLabels: {
            enabled: true,
            formatter: function (val: any) {
              return val + "%";
            },
            offsetY: -20,
            style: {
              fontSize: "12px",
              colors: ["#304758"]
            }
          },

          xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            position: "top",
            labels: {
              offsetY: -18
            },
            axisBorder: {
              show: false
            },
            axisTicks: {
              show: false
            },
            crosshairs: {
              fill: {
                type: "gradient",
                gradient: {
                  colorFrom: "#D8E3F0",
                  colorTo: "#BED1E6",
                  stops: [0, 100],
                  opacityFrom: 0.4,
                  opacityTo: 0.5
                }
              }
            },
            tooltip: {
              enabled: true,
              offsetY: -35
            }
          },
          fill: {
            type: "gradient",
            gradient: {
              shade: "light",
              type: "horizontal",
              shadeIntensity: 0.25,
              gradientToColors: undefined,
              inverseColors: true,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [50, 0, 100, 100]
            }
          },
          yaxis: {
            axisBorder: {
              show: false
            },
            axisTicks: {
              show: false
            },
            labels: {
              show: false,
              formatter: function (val: any) {
                return val + "%";
              }
            }
          },
          title: {
            text: "Monthly Inflation in Argentina, 2002",
            floating: 0,
            offsetY: 320,
            align: "center",
            style: {
              color: "#444"
            }
          }
        };


        this.chartOptions4 = {
          series: [
            {
              name: "Series 1",
              data: [20, 100, 40, 30, 50, 80, 33]
            }
          ],
          chart: {
            height: 410,
            type: "radar",
            background: '#3A3B3C',
          },
          dataLabels: {
            enabled: true
          },
          plotOptions: {
            radar: {
              size: 140,
              polygons: {
                strokeColor: "#e9e9e9",
                fill: {
                  colors: ["#f8f8f8", "#fff"]
                }
              }
            }
          },
          title: {
            text: "Radar with Polygon Fill"
          },
          colors: ["#FF4560"],
          markers: {
            size: 4,
            colors: ["#fff"],
            strokeColors: ["#FF4560"],
            strokeWidth: 2
          },
          tooltip: {
            y: {
              formatter: function (val: any) {
                return val;
              }
            }
          },
          xaxis: {
            categories: [
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"
            ]
          },
          yaxis: {
            tickAmount: 7,
            labels: {
              formatter: function (val: any, i: any) {
                if (i % 2 === 0) {
                  return val;
                } else {
                  return "";
                }
              }
            }
          }
        };


      } else {
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


        this.chartOptions2 = {
          series: [105, 67, 38],
          chart: {
            height: 430,
            type: "radialBar",
            background: '#fff',
            showlabel: true
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


        this.chartOptions3 = {
          series: [
            {
              name: "Inflation",
              data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
            }
          ],
          chart: {
            height: 410,
            type: "bar",
            background: '#fff',
          },
          plotOptions: {
            bar: {
              dataLabels: {
                position: "top" // top, center, bottom
              }
            }
          },
          dataLabels: {
            enabled: true,
            formatter: function (val: any) {
              return val + "%";
            },
            offsetY: -20,
            style: {
              fontSize: "12px",
              colors: ["#304758"]
            }
          },

          xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            position: "top",
            labels: {
              offsetY: -18
            },
            axisBorder: {
              show: false
            },
            axisTicks: {
              show: false
            },
            crosshairs: {
              fill: {
                type: "gradient",
                gradient: {
                  colorFrom: "#D8E3F0",
                  colorTo: "#BED1E6",
                  stops: [0, 100],
                  opacityFrom: 0.4,
                  opacityTo: 0.5
                }
              }
            },
            tooltip: {
              enabled: true,
              offsetY: -35
            }
          },
          fill: {
            type: "gradient",
            gradient: {
              shade: "light",
              type: "horizontal",
              shadeIntensity: 0.25,
              gradientToColors: undefined,
              inverseColors: true,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [50, 0, 100, 100]
            }
          },
          yaxis: {
            axisBorder: {
              show: false
            },
            axisTicks: {
              show: false
            },
            labels: {
              show: false,
              formatter: function (val: any) {
                return val + "%";
              }
            }
          },
          title: {
            text: "Monthly Inflation in Argentina, 2002",
            floating: 0,
            offsetY: 320,
            align: "center",
            style: {
              color: "#444"
            }
          }
        };


        this.chartOptions4 = {
          series: [
            {
              name: "Series 1",
              data: [20, 100, 40, 30, 50, 80, 33]
            }
          ],
          chart: {
            height: 410,
            type: "radar",
            background: '#fff',
          },
          dataLabels: {
            enabled: true
          },
          plotOptions: {
            radar: {
              size: 140,
              polygons: {
                strokeColor: "#e9e9e9",
                fill: {
                  colors: ["#f8f8f8", "#fff"]
                }
              }
            }
          },
          title: {
            text: "Radar with Polygon Fill"
          },
          colors: ["#FF4560"],
          markers: {
            size: 4,
            colors: ["#fff"],
            strokeColors: ["#FF4560"],
            strokeWidth: 2
          },
          tooltip: {
            y: {
              formatter: function (val: any) {
                return val;
              }
            }
          },
          xaxis: {
            categories: [
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"
            ]
          },
          yaxis: {
            tickAmount: 7,
            labels: {
              formatter: function (val: any, i: any) {
                if (i % 2 === 0) {
                  return val;
                } else {
                  return "";
                }
              }
            }
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
