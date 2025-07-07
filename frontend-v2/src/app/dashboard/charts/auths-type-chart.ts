import { Component } from "@angular/core";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { ScaleType } from '@swimlane/ngx-charts';
import { LegendPosition } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-auths-type-chart',
  imports: [NgxChartsModule],
  template: `
  <ngx-charts-pie-chart
  [view]="view"
  [scheme]="colorScheme"
  [results]="single"
  [gradient]="gradient"
  [legend]="showLegend"
  [legendPosition]="legendPosition"
  [labels]="showLabels"
  [doughnut]="isDoughnut"
  (select)="onSelect($event)"
  (activate)="onActivate($event)"
  (deactivate)="onDeactivate($event)"
  >
</ngx-charts-pie-chart>`,
  standalone: true
})
export class AuthsTypeChart {
  single: any[];
  view: [number, number] = [700, 300];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: LegendPosition = LegendPosition.Right;

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
  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
 }