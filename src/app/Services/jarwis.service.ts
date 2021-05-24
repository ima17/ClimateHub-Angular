import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JarwisService {
  private baseUrl ='http://localhost:8000/api';


  constructor(private http: HttpClient) { }

  login(data){
    return this.http.post(`${this.baseUrl}/login`, data)
  }

  registeruser(data){
    return this.http.post(`${this.baseUrl}/registeruser`, data)
  }

  sendPasswordLink(data){
    return this.http.post(`${this.baseUrl}/sendPasswordLink`, data)
  }

  changePassword(data){
    return this.http.post(`${this.baseUrl}/resetPassword`, data)
  }
}
