import { Component, OnInit } from '@angular/core';
import { EventServiceService } from 'src/app/services/event-service.service';
import {ActivatedRoute} from '@angular/router';
import {Event} from 'src/app/event';


@Component({
  selector: 'app-event-poll',
  templateUrl: './event-poll.component.html',
  styleUrls: ['./event-poll.component.scss']
})
export class EventPollComponent implements OnInit {

  poll_id:any;
  poll_data:any;
  poll=new Event;

  constructor(private route:ActivatedRoute,private EventService:EventServiceService) { }

  ngOnInit(): void {
    this.poll_id=this.route.snapshot.params.id;
    this.getData();
  }

  getData(){
    this.EventService.getEventById(this.poll_id).subscribe(res=>{
      this.poll_data=res;
      this.poll=this.poll_data;
      
      //console.log(res);
    });
  }

}
