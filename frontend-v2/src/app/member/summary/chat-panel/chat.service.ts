import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
    
  llmurl = `${environment.wfHost}/chat`;
  apiurl = `${environment.apiHost}/chats`;

  constructor(private http:HttpClient) { }

  askQuestion(sessionId: string, question: string) {
    return this.http.post(this.llmurl, {
      sessionId: sessionId,
      chatInput: question
    });
  }

  getChatHistory(sessionId: string) {
    return this.http.get(`${this.apiurl}/history/${sessionId}`);
  }
}