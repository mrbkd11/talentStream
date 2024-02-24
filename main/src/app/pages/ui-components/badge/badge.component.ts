import { Component, OnInit } from '@angular/core';
export interface Candidate {
  id: number;
  name: string;
  profession: string;
  experience: number;
}

const CANDIDATES: Candidate[] = [
  { id: 1, name: 'John Doe', profession: 'Software Developer', experience: 5 },
  { id: 2, name: 'Jane Smith', profession: 'Project Manager', experience: 8 },
  { id: 3, name: 'William Johnson', profession: 'Data Analyst', experience: 4 },
  // Add more candidates as needed
];

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.scss']
})
  
export class AppBadgeComponent implements OnInit {
  isChatBoxVisible: boolean = false;
  messages: { sender: string; content: string }[] = [];
  newMessage: string = '';
  

  constructor() {}

  ngOnInit(): void {}

  toggleChatBox(): void {
    this.isChatBoxVisible = !this.isChatBoxVisible;
  }

 sendMessage(): void {
  // Add guard to prevent empty messages from being sent
  if (!this.newMessage.trim()) {
    return;
  }

  // Add user message to the messages array
  this.messages.push({ sender: 'User', content: this.newMessage.trim() });

  // Check if the message asks for candidate names
  if (this.newMessage.toLowerCase().includes('name') || this.newMessage.toLowerCase().includes('candidates')) {
    this.respondWithCandidateNames();
  } else {
    // If not asking for names, proceed with generic bot response
    this.handleBotResponse();
  }

  // Clear the input field
  this.newMessage = '';
}

respondWithCandidateNames(): void {
  // Simulate some processing time (e.g., 1 second)
  setTimeout(() => {
    const names = CANDIDATES.map(candidate => candidate.name).join(', ');
    const response = `Here are the names of the candidates: ${names}`;

    // Add bot message to the messages array
    this.messages.push({ sender: 'Bot', content: response });
  }, 1000);
}


  handleBotResponse(): void {
    // Simulate some processing time (e.g., 1.5 seconds)
    setTimeout(() => {
      // This is where the bot logic will go. For now, we just send back a generic response.
      const botMessage = 'How can I help you?';

      // Add bot message to the messages array
      this.messages.push({ sender: 'Bot', content: botMessage });
    }, 1500);
  }
}
