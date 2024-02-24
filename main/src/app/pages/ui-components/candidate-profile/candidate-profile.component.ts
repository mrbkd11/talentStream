import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactInfoDialogComponent } from '../contact-info-dialog/contact-info-dialog.component';

interface Candidate {
resumeUrl: string;
  name: string;
  position: string;
  imageUrl: string;
  email: string;
  phone: string;
  location: string;
  skills: string[];
  bio: string;
}

@Component({
  selector: 'app-candidate-profile',
  templateUrl: './candidate-profile.component.html',
  styleUrls: ['./candidate-profile.component.scss']
})
export class CandidateProfileComponent implements OnInit {
  // Example dummy data for a candidate
  candidate: Candidate = {
    name: 'Mohamed Boukadida',
    position: 'ICT ENGINEERING STUDENT',
    imageUrl: 'assets/images/profile/profile1.jpg', // Make sure you have an image at this path in your assets
    email: 'mohamed.boukadida@supcom.tn',
    phone: '+1234567890',
    location: 'kalaa kebira ,sousse',
    skills: ['JavaScript', 'Angular',' C / C++','PHP','Python'] ,
    bio: 'Passionate full stack developer with 5+ years of experience in building scalable web applications and leading technical teams. Eager to tackle challenging projects and create meaningful software.',
    resumeUrl: 'assets/mohamed_boukadida_resume.pdf'   };
 



  ngOnInit(): void {
    // Component initialization
  }
  constructor(public dialog: MatDialog) {}

  openContactInfo(candidate: Candidate) {
    this.dialog.open(ContactInfoDialogComponent, {
      width: '250px',
      data: { candidate: candidate }
    });
  }

  downloadResume(url: string) {
    window.open(url, '_blank');
  }
}
