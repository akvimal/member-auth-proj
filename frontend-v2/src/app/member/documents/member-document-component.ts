import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocumentService } from './document-service';
import { CommonModule } from '@angular/common';
import { UploadDocuments } from './document-upload/upload-documents';

@Component({
  selector: 'app-mbr-documents',
  imports: [CommonModule,UploadDocuments],
  templateUrl: './member-document-component.html'
})
export class MemberDocumentComponent {

  memberId = '';
  documentData: any;

  private activatedRoute = inject(ActivatedRoute);
  private service = inject(DocumentService);

  constructor() {
    this.activatedRoute.params.subscribe((params) => {
      this.memberId = params['id'];
    });
  }

    ngOnInit() {
    // console.log('AuthorizationComponent initialized with memberId:', this.memberId);

    this.service.getAllByMemberId(this.memberId).subscribe((data: any) => {
      // console.log('AuthorizationComponent data for member:', data);
      this.documentData = data;
    });
  }

  reloadData(){
    this.service.getAllByMemberId(this.memberId).subscribe((data: any) => {
      // console.log('AuthorizationComponent data for member:', data);
      this.documentData = data;
    });
  }
}
