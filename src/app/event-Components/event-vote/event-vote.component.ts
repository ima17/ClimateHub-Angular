import { Component, OnInit } from '@angular/core';
import {EventServiceService } from 'src/app/services/event-service.service';

@Component({
  selector: 'app-event-vote',
  templateUrl: './event-vote.component.html',
  styleUrls: ['./event-vote.component.scss']
})
export class EventVoteComponent implements OnInit {

  pollList: any;
  constructor(private EventService:EventServiceService) { }

  ngOnInit(): void {
    this.getAllPoll();
  }

  getAllPoll(){
    this.EventService.getAllPoll().subscribe(res=>{
      this.pollList=res;
    });
  }
}
