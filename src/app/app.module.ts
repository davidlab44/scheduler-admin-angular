import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartlineComponent } from './charts/chartline/chartline.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartcolumnComponent } from './charts/chartcolumn/chartcolumn.component';
import { ChartareaComponent } from './charts/chartarea/chartarea.component';
import { ChartsparklinebasicComponent } from './charts/chartsparklinebasic/chartsparklinebasic.component';
import { SimplePieChartComponent } from './charts/simple-pie-chart/simple-pie-chart.component';
import { WorldmapchartComponent } from './charts/worldmapchart/worldmapchart.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'basicLineChart', component: ChartlineComponent },
  { path: 'basicAreaChart', component: ChartareaComponent },
  { path: 'basiccolumnChart', component: ChartcolumnComponent },
  { path: 'sparklineChart', component: ChartsparklinebasicComponent },
  { path: 'simplePieChart', component: SimplePieChartComponent },
  { path: 'worldmapChart', component: WorldmapchartComponent },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ChartlineComponent,
    HomeComponent,
    DashboardComponent,
    ChartcolumnComponent,
    ChartareaComponent,
    ChartsparklinebasicComponent,
    SimplePieChartComponent,
    WorldmapchartComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
