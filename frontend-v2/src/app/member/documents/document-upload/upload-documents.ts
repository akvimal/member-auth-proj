import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DocumentService } from '../document-service';

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-upload-documents',
  imports: [CommonModule, FormsModule],
  templateUrl: './upload-documents.html',
  styleUrls: ['./upload-documents.scss'],
  providers: [DocumentService]
})
export class UploadDocuments {

  @Input() memberId: string = '';
  @Output() onUploadComplete = new EventEmitter<string>();

  isDragging = false;
  uploading = false;

  file: any;
  pdfUrl: SafeResourceUrl | null = null;

  category: string = ''; // Default 
  title: string = '';
  errorMessage = '';

  constructor(private service: DocumentService, private sanitizer: DomSanitizer) { }

  onFileDrop(event: DragEvent) {
    event.preventDefault();
    this.isDragging = false;

    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      this.file = files[0];
      console.log('File dropped:', this.file);
      this.previewFile();
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault(); // Important to allow drop
    this.isDragging = true;
  }

  onDragLeave() {
    this.isDragging = false;
  }

  selectFile(event: Event) {
    this.errorMessage = '';
    this.file = (event.target as HTMLInputElement).files?.[0];

    this.previewFile();
  }

  previewFile() {
    if (this.file.type !== 'application/pdf' || this.file.size > 5242880) {
      // console.error('Invalid file type or size');
      this.errorMessage = 'Invalid file type or size';
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const unsafeUrl = reader.result as string;
      this.pdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(unsafeUrl);
    }
    reader.readAsDataURL(this.file);
    this.title = this.file.name;
  }

  cancelDocument() {
    this.pdfUrl = null;
  }

  submitDocument() {
    if (this.file && this.memberId) {
      this.uploading = true;
      this.service.submitDocument(this.file, { member_id: this.memberId, category: this.category, title: this.title }).subscribe({
        next: (response: any) => {
          console.log('File uploaded successfully', response);
          // Handle success response
          this.uploading = false;
          this.pdfUrl = null; // Reset the PDF URL after successful upload
          this.onUploadComplete.emit(response); // Emit the response to the parent component
        },
        error: (error: any) => {
          console.error('Error uploading file', error);
          // Handle error response
        }
      });
    } else {
      console.error('No file selected or member ID is missing');
    }
  }
}
