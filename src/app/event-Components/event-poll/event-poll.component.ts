import { Component, OnInit } from '@angular/core';
import { EventServiceService } from 'src/app/services/event-service.service';
import {ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup , ReactiveFormsModule, FormsModule, FormControl, Validators} from '@angular/forms';
import {Event} from 'src/app/event';


@Component({
  selector: 'app-event-poll',
  templateUrl: './event-poll.component.html',
  styleUrls: ['./event-poll.component.scss']
})
export class EventPollComponent implements OnInit {
  saveVote: FormGroup;
  eventPoll_id:any;
  eventPoll_data:any;
  eventPoll=new Event;

  constructor(private route:ActivatedRoute,private EventService:EventServiceService,private formBuilder:FormBuilder) { 
    this.saveVote=this.formBuilder.group({
      vote: new FormControl,
      
    })

  }

  ngOnInit(): void {
    this.eventPoll_id=this.route.snapshot.params.id;
    this.getData();
  }

  getData(){
    this.EventService.getEventById(this.eventPoll_id).subscribe(res=>{
      this.eventPoll_data=res;
      this.eventPoll=this.eventPoll_data;
      
      //console.log(res);
    });
  }

  castVote(){
    //this.EventService.sendVote(this.eventPoll_id).subscribe(res=>{

    //});
    console.log("hi");
    
  }

}
