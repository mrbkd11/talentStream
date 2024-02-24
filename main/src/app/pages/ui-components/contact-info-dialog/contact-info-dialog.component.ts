import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-contact-info-dialog',
  template: `
    <h1 mat-dialog-title>Contact Info</h1>
    <div mat-dialog-content>
      <p><strong>Email:</strong> {{ data.candidate.email }}</p>
      <p><strong>Phone:</strong> {{ data.candidate.phone }}</p>
      <!-- Add more contact details here -->
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="onClose()">Close</button>
    </div>
  `,
})
export class ContactInfoDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ContactInfoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onClose(): void {
    this.dialogRef.close();
  }
}

