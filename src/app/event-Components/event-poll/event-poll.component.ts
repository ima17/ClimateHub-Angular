import { Component, OnInit } from '@angular/core';
import { EventServiceService } from 'src/app/services/event-service.service';
import {ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup , ReactiveFormsModule, FormsModule, FormControl, Validators} from '@angular/forms';
import {Event} from 'src/app/event';
import Swal from 'sweetalert2/dist/sweetalert2.all.js';


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
  choice:any;

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
    var voteChoice: any = new FormData();
    voteChoice.append("event_id", this.eventPoll_id);
    voteChoice.append("isVote", this.saveVote.get('vote').value);
    voteChoice.append("user_id",2);
    console.log(this.saveVote.get('vote').value);
    
    this.EventService.sendVote(voteChoice).subscribe(
      (response) => //console.log(response),
      Swal.fire({
        title:'Great',
        text:'You voted',
        icon:'success'
      }),
      
      (error) => //console.log(error)
      Swal.fire({
        title:'Sorry',
        text:'Something went wrong',
        icon:'error'
      }),
    )
  }

}
