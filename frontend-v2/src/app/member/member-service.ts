import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MemberService {

    apiurl = `${environment.apiHost}/members`;

    constructor(private http:HttpClient) {}

    getMemberById(memberId: string): any {
        return this.http.get(`${this.apiurl}/${memberId}`);
    }
}