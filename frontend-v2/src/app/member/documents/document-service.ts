import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

    apiurl = `${environment.apiHost}/documents`;
    wfurl = `${environment.wfHost}`;

    constructor(private http:HttpClient) {}

    getAll(): any {
        return this.http.get(`${this.apiurl}`);
    }
    
    getAllByMemberId(memberId: string): any {
        return this.http.get(`${this.apiurl}/member/${memberId}`);
    }

    uploadDocument(file: File, metadata: any) {
        const documentData = new FormData();
        documentData.append('file', file); 
        documentData.append('metadata', JSON.stringify(metadata)); // Assuming metadata is an object with member details
        // For example, you might use HttpClient to send a POST request
        return this.http.post(this.wfurl+'/upload-doc', documentData);
    }

    submitDocument(file: File, metadata: any) {
        const documentData = new FormData();
        documentData.append('file', file); 
        documentData.append('metadata', JSON.stringify(metadata)); // Assuming metadata is an object with member details
        // For example, you might use HttpClient to send a POST request
        return this.http.post(this.wfurl+'/upload-clinical', documentData);
    }
}