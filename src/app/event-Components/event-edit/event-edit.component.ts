import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Event} from 'src/app/event';
import {EventServiceService } from 'src/app/services/event-service.service';
import swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.scss']
})
export class EventEditComponent implements OnInit {

  id:any;
  data:any;
  event=new Event;

  constructor(private route:ActivatedRoute, private Eventservice:EventServiceService) { }

  ngOnInit(): void {
    //console.log(this.route.snapshot.params.id);
    this.id=this.route.snapshot.params.id;
    this.getData();
  }
  getData(){
    this.Eventservice.getEventById(this.id).subscribe(res=>{
      this.data=res;
      this.event=this.data;
      
      //console.log(res);
    });
  }

  

  updateEvent(){
    this.Eventservice.updateEvent(this.id,this.event).subscribe(res=>
      { 
        
        swal.fire({
          title:'',
          text:res['message'],
          icon:'success'
        });
      });
  }


}
