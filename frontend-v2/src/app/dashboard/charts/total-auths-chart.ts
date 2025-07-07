import { Component } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-total-auths-chart',
  imports: [NgxChartsModule],
  template: `<ngx-charts-bar-vertical
      [view]="view"
      [scheme]="colorScheme"
      [results]="single"
      [gradient]="gradient"
      [xAxis]="showXAxis"
      [yAxis]="showYAxis"
      [legend]="showLegend"
      [showXAxisLabel]="showXAxisLabel"
      [showYAxisLabel]="showYAxisLabel"
      [xAxisLabel]="xAxisLabel"
      [yAxisLabel]="yAxisLabel"
      (select)="onSelect($event)">
    </ngx-charts-bar-vertical>`,
})
export class TotalAuthsChart {
  single: any[];

  view: any = [700, 300];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Status';
  showYAxisLabel = true;
  yAxisLabel = 'Count';

  colorScheme = {
    domain: ['#2e86c1', '#A10A28', '#C7B42C', '#AAAAAA'],
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal
  };

  constructor() {
    // Sample data
    this.single = [
      { name: 'Received', value: 89 },
      { name: 'Rejected', value: 5 }
    ];
  }

  onSelect(event: any) {
    console.log(event);
  }

}
