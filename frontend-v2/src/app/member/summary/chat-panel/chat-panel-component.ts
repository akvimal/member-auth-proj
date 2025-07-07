import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChatService } from './chat.service';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-chat-panel',
  imports: [CommonModule,FormsModule,MarkdownModule],
  templateUrl: './chat-panel-component.html'
})
export class ChatPanelComponent {

  @Input() sessionId: string = '';

  question: string = '';
  answer: string = '';

  ask = '';
  isLoading = false;

  history: any[] = [];

  constructor(private chatService: ChatService) {}

  ngOnInit(): void { 
    this.chatService.getChatHistory(this.sessionId).subscribe((history: any) => {
      this.history = history;
    });
  }

  submitQuestion() {
    if (this.question.trim()) {
      this.isLoading = true;
      this.chatService.askQuestion(this.sessionId, this.question).subscribe((response: any) => {
        this.answer = response.output || 'No answer provided';
        
        this.ask = this.question;
        this.question = '';
        this.isLoading = false;
      });
    }
  }



}
