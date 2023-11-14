import { Component, OnInit } from '@angular/core';
import * as am5 from '@amcharts/amcharts5';
import * as am5map from '@amcharts/amcharts5/map';
import am5geodata_worldLow from '@amcharts/amcharts5-geodata/worldLow';

@Component({
  selector: 'app-worldmapchart',
  templateUrl: './worldmapchart.component.html',
  styleUrls: ['./worldmapchart.component.css'],
})
export class WorldmapchartComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let root = am5.Root.new('chartdiv');
    let chart = root.container.children.push(
      am5map.MapChart.new(root, {
        projection: am5map.geoEquirectangular(),
      })
    );
    let polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
      })
    );
    polygonSeries.data.push({
      geometry: {
        type: 'Mercado',
        coordinates: [
          [
            [26.5936, 55.6676],
            [26.175, 55.0033],
            [25.8594, 54.9192],
            [25.5473, 54.3317],
            [24.7683, 53.9746],
            [23.4845, 53.9398],
            [23.37, 54.2005],
            [22.7663, 54.3568],
            [22.8311, 54.8384],
            [21.2358, 55.2641],
            [21.0462, 56.07],
            [22.0845, 56.4067],
            [24.1206, 56.2642],
            [24.9032, 56.3982],
            [26.5936, 55.6676],
          ],
        ],
      },
    });
    polygonSeries.mapPolygons.template.setAll({
      tooltipText: '{name}',
      interactive: true,
    });

    polygonSeries.mapPolygons.template.states.create('hover', {
      fill: am5.color(0x75cdd6),
    });
  }
}
