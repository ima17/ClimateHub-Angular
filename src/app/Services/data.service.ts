import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }

  getData(){
    return this.httpClient.get('http://localhost:8000/api/users');
  }

  deleteData(id){
    return this.httpClient.delete('http://localhost:8000/api/deleteUsers/'+id);
  }


  getUserById(id){
    return this.httpClient.get('http://localhost:8000/api/users/'+id);
  }


  updateData(id, data){
    return this.httpClient.put('http://localhost:8000/api/updateUsers/'+id, data);
  }

  insertData(data){
    return this.httpClient.post('http://localhost:8000/api/addData', data);
  }

  getData2(){
    return this.httpClient.get('http://localhost:8000/api/getusers');
  }

  clearData(id){
    return this.httpClient.delete('http://localhost:8000/api/clearUsers/'+id);
  }
}
