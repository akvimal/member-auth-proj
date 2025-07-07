import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ChatPanelComponent } from './chat-panel/chat-panel-component';

@Component({
  selector: 'app-mbr-summary',
  imports: [RouterModule,ChatPanelComponent],
  templateUrl: './member-summary-component.html'
})
export class MemberSummaryComponent {

  memberId = '';

  private activatedRoute = inject(ActivatedRoute);

  constructor() {
    this.activatedRoute.params.subscribe((params) => {
      this.memberId = params['id'];
    });
  }

}
