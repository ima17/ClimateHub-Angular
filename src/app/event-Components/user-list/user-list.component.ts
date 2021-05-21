import { Component, OnInit } from '@angular/core';
import {EventServiceService} from 'src/app/services/event-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  events:any;
  page:any;

  constructor(private eventService:EventServiceService) { }

  ngOnInit(): void {
    this.getEvents();
    
  }

  getEvents(){
    this.eventService.getData().subscribe(res=>{
      this.events=res;
      console.log('success')
    }),
    (error=>{
      console.log(error);
    
    })
  }
}
