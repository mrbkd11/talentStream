import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

export interface ChipColor {
  name: string;
  color: ThemePalette;
}

export interface Fruit {
  name: string;
}

export interface Vegetable {
  name: string;
}

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss'],
})
export class AppChipsComponent {
  files: any[] = [];

  constructor(private _snackBar: MatSnackBar, private router: Router) {}

  // Dragover listener
  onDragOver(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
  }

  // Dragleave listener
  onDragLeave(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
  }

  // Handle file drop
  onFileDropped(event: DragEvent) {
  event.preventDefault();
  if (event.dataTransfer && event.dataTransfer.files) {
    const files: FileList = event.dataTransfer.files;
    for (let i = 0; i < files.length; i++) {
      this.files.push(files[i]);
    }
  }
}


  // Handle file from browsing or dropped
 // Handle file from browsing
fileBrowseHandler(event: Event) {
  const element = event.target as HTMLInputElement; // Adjusted to cast from Event
  let files: FileList | null = element.files;
  if (files) {
    for (let i = 0; i < files.length; i++) {
      this.files.push(files[i]);
    }
  }
}


  // Delete file from files list
  removeFile(index: number) {
    this.files.splice(index, 1);
  }

  submitFiles(): void {
    if (this.files.length > 0) {
      // Handle file submission to your backend here

      // Display Snackbar notice message
      this._snackBar.open('Submission complete', 'Close', {
        duration: 2000,
      });

      // Redirect to the dashboard page after a delay
      setTimeout(() => {
        this.router.navigate(['/dashboard']);
      }, 2000);
    } else {
      this._snackBar.open('Please add files before submitting', 'Close', {
        duration: 2000,
      });
    }
  }
}