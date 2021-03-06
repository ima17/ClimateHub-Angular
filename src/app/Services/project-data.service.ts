import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectDataService {
  private paramSource = new BehaviorSubject(null);
  sharedParam = this.paramSource.asObservable();

  constructor(private httpClient:HttpClient) { }
  
  changeParam(param: any[]) {
    this.paramSource.next(param)
  }

  getProjectsData(){
    return this.httpClient.get('http://127.0.0.1:8000/api/projects');
  }

  getPublicProjectData(){
    return this.httpClient.get('http://127.0.0.1:8000/api/publicProjects');
  }

  getPrivateProjectData(){
    return this.httpClient.get('http://127.0.0.1:8000/api/privateProjects');
  }
  
  getLatestPublicProjectData(){
    return this.httpClient.get('http://127.0.0.1:8000/api/latestProjects');
  }
  
  getPublicToolBoxData(){
    return this.httpClient.get('http://127.0.0.1:8000/api/publicToolbox');
  }

  getPrivateToolBoxData(){
    return this.httpClient.get('http://127.0.0.1:8000/api/privateToolbox');
  }

  getPublicAdditivesData(){
    return this.httpClient.get('http://127.0.0.1:8000/api/publicAdditives');
  }

  getPrivateAdditivesData(){
    return this.httpClient.get('http://127.0.0.1:8000/api/privateAdditives');
  }
  




}

