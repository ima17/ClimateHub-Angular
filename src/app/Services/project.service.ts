import { Project } from 'src/app/project';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private httpClient:HttpClient) { }

  getData(){
    return this.httpClient.get('http://127.0.0.1:8000/api/projectsList/');
  }

  getProjectById(id){
    return this.httpClient.get('http://127.0.0.1:8000/api/getProjectById/'+id);
  }

  uploadProject(project){
    return this.httpClient.post('http://127.0.0.1:8000/api/uploadProject', project);
  }

  updateProject(id, data){
    return this.httpClient.put('http://127.0.0.1:8000/api/updateProject'+id,data);
  }

  deleteProject(id){
    return this.httpClient.delete('http://127.0.0.1:8000/api/deleteProject/'+id);
  }

}
