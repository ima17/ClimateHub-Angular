import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Event} from 'src/app/event';
import {EventServiceService} from 'src/app/event-service.service';
import swal from 'sweetalert2/dist/sweetalert2.js';


@Component({
  selector: 'app-event-update',
  templateUrl: './event-update.component.html',
  styleUrls: ['./event-update.component.scss']
})
export class EventUpdateComponent implements OnInit {

  id:any;
  data:any;
  event=new Event;

  constructor(private route:ActivatedRoute, private EventService:EventServiceService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params.id;
    this.getData();
  }

  getData(){
    this.EventService.getEventById(this.id).subscribe(res=>{
      this.data=res;
      this.event=this.data;
      //console.log(res);
    });
  }

  

  updateEvent(){
    this.EventService.updateEvent(this.id,this.event).subscribe(res=>
      { 
        
        swal.fire({
          title:'',
          text:res['message'],
          icon:'success'
        });
      });
  }

}
