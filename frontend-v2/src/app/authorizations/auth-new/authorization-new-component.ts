import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthorizationService } from '../authorization-service';

@Component({
  selector: 'app-new-auth',
  imports: [RouterModule,FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './authorization-new-component.html'
})
export class AuthorizationNewComponent {

  serviceTypes = [
    'Inpatient Admission',
    'Outpatient Procedure',
    'Office Visit',
    'Diagnostic Test (Imaging, Labs)',
    'Durable Medical Equipment (DME)',
    'Specialty Drug',
    'Home Health Care',
    'Other'
  ]

  supportingDocuments = [
    'Clinical notes','Lab results',
    'Imaging reports','Treatment plans','Other relevant documents']

    private fb = inject(FormBuilder);
    // FormGroup instance for the authorization form
    private service = inject(AuthorizationService);
    private router = inject(Router);



  form:FormGroup;
  // This component is for creating a new authorization
  // You can add your logic here to handle the creation of a new authorization

constructor() {
    this.form = this.fb.group({
      member_name: [''],
      member_id: [''],
      member_dob: [''],
      insurance_plan: [''],
      member_phone: [''],
      request_provider_name: [''],
      request_provider_npi: [''],
      request_provider_tin: [''],
      request_provider_phone: [''],
      request_provider_fax: [''],
      facility_name: [''],
      facility_address: [''],
      service_types: [''],
      service_from_date: [''],
      service_to_date: [''],
      diagnosis_codes: [''],
      procedure_codes: [''],
      service_description: [''],
      notes: [''],
      attached_documents: [],
      urgency_type: [''],
      additional_comments: [''],
      submit_by: [''],
      submit_date: [''],
      submit_person_phone: [''],
      submit_person_email: [''],
      prior_auth_no: ['']
    });

    // this.serviceTypes.forEach(() => this.types.push(this.fb.control(false)));
  }

//  get types(): FormArray {
//     return this.form.get('service_types') as FormArray;
//   }

  ngOnInit() {
    // Any additional initialization logic can go here
    console.log('New Authorization Component initialized');
  }

  onSubmit() {
    console.log('Form submitted:', this.form.value);
    if (this.form.valid) {
      // Here you would typically send the data to your backend service
      this.service.submitNewAuth(this.form.value).subscribe({
      next: (response:any) => {
        console.log('Response from server:', response);
        if(response && response['status'] === 'SUCCESS') {
          console.log('Auth request submitted successfully');
          this.router.navigate(['/auth-confirmation', response['authorization_number']]);
        }
      },
      error: (error) => {
        console.error('Error submitting auth request:', error);
      }
    });
    } else {
      console.error('Form is invalid');
    }
  }
}
