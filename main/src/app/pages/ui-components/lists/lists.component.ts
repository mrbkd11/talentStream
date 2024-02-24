import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

export interface Candidate {
  id: number;
  name: string;
  profession: string;
  experience: number;
  skills: string[];
  language: string;
}
const CANDIDATES: Candidate[] = [
  { id: 1, name: 'John Doe', profession: 'Software Developer', experience: 5, skills: ['JavaScript', 'Angular'], language: 'English' },
  { id: 2, name: 'Emily Smith', profession: 'Data Scientist', experience: 4, skills: ['Python', 'R', 'Machine Learning', 'Data Visualization'], language: 'English' },
  { id: 3, name: 'Michael Brown', profession: 'Cloud Solutions Architect', experience: 7, skills: ['AWS', 'Docker', 'Kubernetes', 'DevOps'], language: 'English' },
  { id: 4, name: 'Linda Green', profession: 'Cybersecurity Analyst', experience: 6, skills: ['Cybersecurity', 'Ethical Hacking', 'Incident Response', 'Cryptography'], language: 'English' },
  { id: 5, name: 'James Wilson', profession: 'Mobile App Developer', experience: 3, skills: ['Swift', 'Kotlin', 'React Native', 'UI/UX Design'], language: 'English' },
  { id: 6, name: 'Sophia Martinez', profession: 'UI/UX Designer', experience: 5, skills: ['Adobe XD', 'Sketch', 'Figma', 'User Research'], language: 'Spanish' },
  { id: 7, name: 'David Taylor', profession: 'Digital Marketing Specialist', experience: 4, skills: ['SEO', 'Content Marketing', 'Social Media Advertising', 'Google Analytics'], language: 'English' },
  { id: 8, name: 'Maria Garcia', profession: 'Artificial Intelligence Engineer', experience: 8, skills: ['TensorFlow', 'PyTorch', 'Natural Language Processing', 'Computer Vision'], language: 'Spanish' },
  { id: 9, name: 'Robert Hernandez', profession: 'Blockchain Developer', experience: 5, skills: ['Solidity', 'Ethereum', 'Smart Contracts', 'DApp Development'], language: 'English' },
  { id: 10, name: 'Laura Lee', profession: 'Network Engineer', experience: 6, skills: ['Cisco Systems', 'Juniper Networks', 'Network Security', 'VoIP'], language: 'Chinese' },
  { id: 11, name: 'Alex Johnson', profession: 'Game Developer', experience: 4, skills: ['Unity', 'C#', '3D Modeling', 'Game Physics'], language: 'English' },
  { id: 12, name: 'Mohamed Boukadida', profession: 'ICT ENGINEERING STUDENT', experience: 0, skills: ['JavaScript', 'Angular',' C / C++','PHP','Python'], language: 'English,French,Arabic' },

];


@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
})
export class AppListsComponent implements OnInit {
displayedColumns: string[] = ['name', 'profession', 'experience', 'skills', 'language', 'profile'];
  dataSource = new MatTableDataSource<Candidate>(CANDIDATES);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private router: Router) {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

goToProfile() {
  window.open("http://localhost:4200/ui-components/condidate-profile", '_blank'); // Ensure this matches your intended path
}

}

