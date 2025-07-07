import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Route, Router, RouterModule } from '@angular/router';
import { MemberService } from './member-service';

@Component({
  selector: 'app-member',
  imports: [RouterModule,FormsModule],
  templateUrl: './member.html',
  styleUrl: './member.scss'
})
export class MemberComponent {

  memberId: string = '';
  memberData: any;
  errorMessage: string = '';

  constructor(private service: MemberService, private router: Router, private route: ActivatedRoute) {}

  onSubmit() {
    this.service.getMemberById(this.memberId).subscribe({
      next: (data:any) => {
        // console.log('Member data:', data);
        if(data) {
        this.memberData = data;
        this.errorMessage = ''; // Clear any previous error message
        this.router.navigate(['./summary', this.memberId],{relativeTo: this.route}); // Navigate to the member details page
        } else {
          this.errorMessage = 'Member not found'; // Set the error message
        }
      }
    });
   
  }
}
