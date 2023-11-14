import { Component, ViewChild } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexFill,
  ApexTooltip,
  ApexXAxis,
  ApexLegend,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexPlotOptions,
  ApexYAxis,
  ApexMarkers,
  ApexStroke,
  ApexResponsive,
  ApexGrid,
  ApexNonAxisChartSeries,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  markers: ApexMarkers; // any;
  stroke: ApexStroke; // any;
  yaxis: ApexYAxis | ApexYAxis[];
  plotOptions: ApexPlotOptions;
  dataLabels: ApexDataLabels;
  colors: string[];
  labels: string[];
  title: ApexTitleSubtitle;
  subtitle: ApexTitleSubtitle;
  legend: ApexLegend;
  fill: ApexFill;
  tooltip: ApexTooltip;
  responsive: ApexResponsive[];
  grid: ApexGrid;
};

declare global {
  interface Window {
    Apex: any;
  }
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  @ViewChild('chart') chart!: ChartOptions;
  public chartOptions!: Partial<ChartOptions>;
  public spark1!: Partial<ChartOptions>;
  public spark2!: Partial<ChartOptions>;
  public spark3!: Partial<ChartOptions>;
  public spark4!: Partial<ChartOptions>;
  public optionsLine!: Partial<ChartOptions>;
  public optionsCircle4!: Partial<ChartOptions>;
  public optionsBar!: Partial<ChartOptions>;
  public optionsArea!: Partial<ChartOptions>;
  constructor() {
    window.Apex = {
      chart: {
        foreColor: '#ccc',
        toolbar: {
          show: false,
        },
      },
      stroke: {
        width: 3,
      },
      dataLabels: {
        enabled: false,
      },
      tooltip: {
        theme: 'dark',
      },
      grid: {
        borderColor: '#535A6C',
        xaxis: {
          lines: {
            show: true,
          },
        },
      },
    };
    this.spark1 = {
      chart: {
        id: 'spark1',
        group: 'sparks',
        type: 'line',
        height: 50,
        width: 300,
        sparkline: {
          enabled: true,
        },
        dropShadow: {
          enabled: true,
          top: 1,
          left: 1,
          blur: 2,
          opacity: 0.2,
        },
      },
      series: [
        {
          data: [25, 66, 41, 59, 25, 44, 12, 36, 9, 21],
        },
      ],
      stroke: {
        curve: 'smooth',
      },
      markers: {
        size: 0,
      },
      grid: {
        padding: {
          top: 20,
          bottom: 10,
          left: 150,
        },
      },
      colors: ['#fff'],
      tooltip: {
        x: {
          show: false,
        },
        y: {
          title: {
            formatter: function formatter(val) {
              return '';
            },
          },
        },
      },
    };
    this.spark2 = {
      chart: {
        id: 'spark2',
        group: 'sparks',
        type: 'line',
        height: 50,
        width: 300,
        sparkline: {
          enabled: true,
        },
        dropShadow: {
          enabled: true,
          top: 1,
          left: 1,
          blur: 2,
          opacity: 0.2,
        },
      },
      series: [
        {
          data: [12, 14, 2, 47, 32, 44, 14, 55, 41, 69],
        },
      ],
      stroke: {
        curve: 'smooth',
      },
      grid: {
        padding: {
          top: 20,
          bottom: 10,
          left: 110,
        },
      },
      markers: {
        size: 0,
      },
      colors: ['#fff'],
      tooltip: {
        x: {
          show: false,
        },
        y: {
          title: {
            formatter: function formatter(val) {
              return '';
            },
          },
        },
      },
    };

    this.spark3 = {
      chart: {
        id: 'spark3',
        group: 'sparks',
        type: 'line',
        height: 50,
        width: 300,
        sparkline: {
          enabled: true,
        },
        dropShadow: {
          enabled: true,
          top: 1,
          left: 1,
          blur: 2,
          opacity: 0.2,
        },
      },
      series: [
        {
          data: [47, 45, 74, 32, 56, 31, 44, 33, 45, 19],
        },
      ],
      stroke: {
        curve: 'smooth',
      },
      markers: {
        size: 0,
      },
      grid: {
        padding: {
          top: 20,
          bottom: 10,
          left: 110,
        },
      },
      colors: ['#fff'],
      xaxis: {
        crosshairs: {
          width: 1,
        },
      },
      tooltip: {
        x: {
          show: false,
        },
        y: {
          title: {
            formatter: function formatter(val) {
              return '';
            },
          },
        },
      },
    };

    this.spark4 = {
      chart: {
        id: 'spark4',
        group: 'sparks',
        type: 'line',
        height: 50,
        width: 300,
        sparkline: {
          enabled: true,
        },
        dropShadow: {
          enabled: true,
          top: 1,
          left: 1,
          blur: 2,
          opacity: 0.2,
        },
      },
      series: [
        {
          data: [15, 75, 47, 65, 14, 32, 19, 54, 44, 61],
        },
      ],
      stroke: {
        curve: 'smooth',
      },
      markers: {
        size: 0,
      },
      grid: {
        padding: {
          top: 20,
          bottom: 10,
          left: 110,
        },
      },
      colors: ['#fff'],
      xaxis: {
        crosshairs: {
          width: 1,
        },
      },
      tooltip: {
        x: {
          show: false,
        },
        y: {
          title: {
            formatter: function formatter(val) {
              return '';
            },
          },
        },
      },
    };

    this.optionsCircle4 = {
      chart: {
        type: 'radialBar',
        height: 350,
        width: 380,
      },
      plotOptions: {
        radialBar: {
          //size: undefined,
          inverseOrder: true,
          hollow: {
            margin: 5,
            size: '48%',
            background: 'transparent',
          },
          track: {
            show: false,
          },
          startAngle: -180,
          endAngle: 180,
        },
      },
      stroke: {
        lineCap: 'round',
      },
      series: [71, 63, 77],
      labels: ['June', 'May', 'April'],
      legend: {
        show: true,
        floating: true,
        position: 'right',
        offsetX: 70,
        offsetY: 240,
      },
    };

    //optionline
    this.optionsLine = {
      chart: {
        height: 328,
        type: 'line',
        zoom: {
          enabled: false,
        },
        dropShadow: {
          enabled: true,
          top: 3,
          left: 2,
          blur: 4,
          opacity: 1,
        },
      },
      stroke: {
        curve: 'smooth',
        width: 2,
      },
      //colors: ["#3F51B5", '#2196F3'],
      series: [
        {
          name: 'Music',
          data: [1, 15, 26, 20, 33, 27],
        },
        {
          name: 'Photos',
          data: [3, 33, 21, 42, 19, 32],
        },
        {
          name: 'Files',
          data: [0, 39, 52, 11, 29, 43],
        },
      ],
      title: {
        text: 'Media',
        align: 'left',
        offsetY: 25,
        offsetX: 20,
      },
      subtitle: {
        text: 'Statistics',
        offsetY: 55,
        offsetX: 20,
      },
      markers: {
        size: 6,
        strokeWidth: 0,
        hover: {
          size: 9,
        },
      },
      grid: {
        show: true,
        padding: {
          bottom: 0,
        },
      },
      labels: [
        '01/15/2022',
        '01/16/2022',
        '01/17/2022',
        '01/18/2022',
        '01/19/2022',
        '01/20/2022',
      ],
      xaxis: {
        tooltip: {
          enabled: false,
        },
      },
      legend: {
        position: 'top',
        horizontalAlign: 'right',
        offsetY: -20,
      },
    };
    this.optionsBar = {
      chart: {
        height: 380,
        type: 'bar',
        stacked: true,
      },
      plotOptions: {
        bar: {
          columnWidth: '30%',
          horizontal: false,
        },
      },
      series: [
        {
          name: 'PRODUCT A',
          data: [14, 25, 21, 17, 12, 13, 11, 19],
        },
        {
          name: 'PRODUCT B',
          data: [13, 23, 20, 8, 13, 27, 33, 12],
        },
        {
          name: 'PRODUCT C',
          data: [11, 17, 15, 15, 21, 14, 15, 13],
        },
      ],
      xaxis: {
        categories: [
          '2011 Q1',
          '2011 Q2',
          '2011 Q3',
          '2011 Q4',
          '2012 Q1',
          '2012 Q2',
          '2012 Q3',
          '2012 Q4',
        ],
      },
      fill: {
        opacity: 1,
      },
    };

    this.optionsArea = {
      chart: {
        height: 380,
        type: 'area',
        stacked: false,
      },
      stroke: {
        curve: 'straight',
      },
      series: [
        {
          name: 'Music',
          data: [11, 15, 26, 20, 33, 27],
        },
        {
          name: 'Photos',
          data: [32, 33, 21, 42, 19, 32],
        },
        {
          name: 'Files',
          data: [20, 39, 52, 11, 29, 43],
        },
      ],
      xaxis: {
        categories: [
          '2011 Q1',
          '2011 Q2',
          '2011 Q3',
          '2011 Q4',
          '2012 Q1',
          '2012 Q2',
        ],
      },
      tooltip: {
        followCursor: true,
      },
      fill: {
        opacity: 1,
      },
    };
  }
}
