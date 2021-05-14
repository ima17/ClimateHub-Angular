import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private httpClient:HttpClient) { }

  uploadProject(UploadData){
    const httpOptions = {
      headers: new HttpHeaders({
       "Content-Type": "multipart/form-data" 
      })
    };
    // let options = new RequestOptions({ headers: headers });
    return this.httpClient.post('', UploadData, httpOptions)
  }

}
