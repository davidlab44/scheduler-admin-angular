import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts/core';
import {
  TooltipComponent,
  TooltipComponentOption,
  GeoComponent,
  GeoComponentOption,
  LegendComponent,
  LegendComponentOption,
} from 'echarts/components';
import { PieChart, PieSeriesOption } from 'echarts/charts';
import { LabelLayout } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import usaJson from 'src/assets/USA.json';

echarts.use([
  TooltipComponent,
  GeoComponent,
  LegendComponent,
  PieChart,
  CanvasRenderer,
  LabelLayout,
]);

type EChartsOption = echarts.ComposeOption<
  | TooltipComponentOption
  | GeoComponentOption
  | LegendComponentOption
  | PieSeriesOption
>;

@Component({
  selector: 'app-usastatesmap',
  templateUrl: './usastatesmap.component.html',
  styleUrls: ['./usastatesmap.component.css'],
})
export class UsastatesmapComponent implements OnInit {
  mapOption: EChartsOption = {};

  ngOnInit(): void {
    const chartDom = document.getElementById('main')!;
    const myChart = echarts.init(chartDom);

    this.mapFunction();

    myChart.hideLoading();
    myChart.setOption(this.mapOption);

    this.mapOption && myChart.setOption(this.mapOption);
  }

  mapFunction(): void {
    echarts.registerMap('USA', usaJson as any, {
      Alaska: {
        left: -131,
        top: 25,
        width: 15,
      },
      Hawaii: {
        left: -110,
        top: 28,
        width: 5,
      },
      'Puerto Rico': {
        left: -76,
        top: 26,
        width: 2,
      },
    });

    this.mapOption = {
      geo: {
        map: 'USA',
        roam: true,
        itemStyle: {
          areaColor: '#e7e8ea',
        },
      },
      tooltip: {},
      legend: {},
      series: [
        randomPieSeries([-86.753504, 33.01077], 15),
        randomPieSeries([-116.853504, 39.8], 25),
        randomPieSeries([-99, 31.5], 30),
        randomPieSeries([-69, 45.5], 12),
      ],
    };
  }
}

function randomPieSeries(
  center: string | number[],
  radius: number
): PieSeriesOption {
  const data = [
    'Opencart',
    'OroCommerce',
    'Magento',
    'Shopify',
    'Prestashop',
  ].map((t) => {
    return {
      value: Math.round(Math.random() * 100),
      name: t,
    };
  });
  return {
    type: 'pie',
    coordinateSystem: 'geo',
    tooltip: {
      formatter: '{b}: {c} ({d}%)',
    },
    label: {
      show: false,
    },
    labelLine: {
      show: false,
    },
    animationDuration: 0,
    radius,
    center,
    data,
  };
}
