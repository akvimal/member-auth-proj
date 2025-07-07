import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

    apiurl = `${environment.apiHost}/authorizations`;

    constructor(private http:HttpClient) {}

    getAll(): any {
        return this.http.get(`${this.apiurl}`);
    }
    
    getAllByMemberId(memberId: string): any {
        return this.http.get(`${this.apiurl}/member/${memberId}`);
    }

    submitNewAuth(authData: any) {
    // Here you would typically send the authData to your backend service
    console.log('Submitting auth request:', authData);
    // return this.http.post(`${this.apiurl}/submit-new`,authData);
    // For example, you might use HttpClient to send a POST request
    return this.http.post(`${this.apiurl}`,authData);
  }
}