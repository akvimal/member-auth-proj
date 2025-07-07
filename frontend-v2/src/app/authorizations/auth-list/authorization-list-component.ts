import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-authorization-list',
  imports: [CommonModule],
  templateUrl: './authorization-list-component.html'
})
export class AuthorizationListComponent {
  
  @Input() memberOnly = false;
  @Input() data: any;

}
