import { Project } from './../project';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private httpClient:HttpClient) { }

  getData(){
    return this.httpClient.get('http://127.0.0.1:8000/api/projects/');
  }

  getProjectById(id){
    return this.httpClient.get('http://127.0.0.1:8000/api/getProjectById/'+id);
  }

  // uploadProject(UploadData: Project){
  //   return this.httpClient.post('http://127.0.0.1:8000/api/uploadProject', UploadData)
  // }

  uploadProject(UploadData){
    const httpOptions = {
      headers: new HttpHeaders({
       "Content-Type": 'multipart/form-data; charset=utf-8; boundary=' + Math.random().toString().substr(2)
      })
    };
    // let options = new RequestOptions({ headers: headers });
    return this.httpClient.post('http://127.0.0.1:8000/api/uploadProject/', UploadData, httpOptions)
  }

  updateProject(id, data){
    return this.httpClient.put('http://127.0.0.1:8000/api/updateProject/'+id,data);
  }

  deleteProject(id){
    return this.httpClient.delete('http://127.0.0.1:8000/api/deleteProject/'+id);
  }

}
