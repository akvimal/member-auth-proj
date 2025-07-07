import { Component } from '@angular/core';
import { TotalAuthsChart } from './charts/total-auths-chart';
import { AuthsTypeChart } from './charts/auths-type-chart';
@Component({
  selector: 'app-dashboard',
  imports: [TotalAuthsChart,AuthsTypeChart],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {
  
  
}
