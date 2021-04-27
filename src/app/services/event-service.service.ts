import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Event } from 'src/app/event';


@Injectable({
  providedIn: 'root'
})
export class EventServiceService {

  constructor(private httpClient: HttpClient) { }
  //tslint:disable-next-line: typedef

  getData(){
    return this.httpClient.get('http://127.0.0.1:8000/api/events');
  }

  insertData(data: Event){
    return this.httpClient.post('http://127.0.0.1:8000/api/saveEvent',data);
  }

  deleteEvent(id){
    return this.httpClient.delete('http://127.0.0.1:8000/api/deleteEvent/'+id);
  }

  getEventById(id){
    return this.httpClient.get('http://127.0.0.1:8000/api/getEventById/'+id);
  }

  updateEvent(id,data){
    return this.httpClient.put('http://127.0.0.1:8000/api/updateEvent/'+id,data);
  }

  sendNotification(){
    return this.httpClient.get('http://127.0.0.1:8000/api/sendMail');
  }
  
  getUserType(u_type:Event){
    return this.httpClient.post('http://127.0.0.1:8000/api/getUserEmail',u_type);
  }

  createPoll(data: Event){
    return this.httpClient.post('http://127.0.0.1:8000/api/savePoll',data);
  }

  getAllPoll(){
    return this.httpClient.get('http://127.0.0.1:8000/api/getPollEvents');
  }

  sendVote(vote){
    return this.httpClient.post('http://127.0.0.1:8000/api/saveVote',vote);
  }
}
