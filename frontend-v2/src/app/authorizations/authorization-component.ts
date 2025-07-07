import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthorizationService } from './authorization-service';
import { AuthorizationListComponent } from './auth-list/authorization-list-component';

@Component({
  selector: 'app-authorizations',
  imports: [RouterModule, AuthorizationListComponent],
  templateUrl: './authorization-component.html'
})
export class AuthorizationComponent {

  authorizationData: any;

  private service = inject(AuthorizationService);

  ngOnInit() {
    this.service.getAll().subscribe((data: any) => {
      // console.log('AuthorizationComponent all data:', data);
      this.authorizationData = data;
    });
  }
}
