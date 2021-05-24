import { Component, OnInit } from '@angular/core';
import {EventServiceService} from 'src/app/services/event-service.service';
import {ActivatedRoute} from '@angular/router';
import swal from 'sweetalert2/dist/sweetalert2.js';


@Component({
  selector: 'app-vote-result',
  templateUrl: './vote-result.component.html',
  styleUrls: ['./vote-result.component.scss']
})
export class VoteResultComponent implements OnInit {

  eventDetail:any;
  polling:any;
  id:any;

  constructor(private eventService:EventServiceService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params.id;
    this.getPollResult();
  }

  getPollResult(){
    this.eventService.getEventById(this.id).subscribe(res=>{
      this.eventDetail=res;
    })
    this.eventService.voteResult(this.id).subscribe(response=>{
      this.polling=response;
      console.log(this.polling);
             
      }),
        
      (error) => console.log(error)
  }
}
