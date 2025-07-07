import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AuthorizationListComponent } from '../../authorizations/auth-list/authorization-list-component';
import { AuthorizationService } from '../../authorizations/authorization-service';

@Component({
  selector: 'app-authorizations',
  imports: [RouterModule, AuthorizationListComponent],
  templateUrl: './member-authorization-component.html'
})
export class MemberAuthorizationComponent {

  memberId = '';
  authorizationData: any;

  private activatedRoute = inject(ActivatedRoute);
  private service = inject(AuthorizationService);

  constructor() {
    this.activatedRoute.params.subscribe((params) => {
      this.memberId = params['id'];
    });
  }

  ngOnInit() {
    // console.log('AuthorizationComponent initialized with memberId:', this.memberId);

    this.service.getAllByMemberId(this.memberId).subscribe((data: any) => {
      // console.log('AuthorizationComponent data for member:', data);
      this.authorizationData = data;
    });
  }
}
