import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Event} from 'src/app/event';
import {EventServiceService } from 'src/app/services/event-service.service';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {dateLessThan} from 'src/app/validation/date.validation';
import swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.scss']
})
export class EventEditComponent implements OnInit {

  eventEdit: FormGroup;
  id:any;
  data:any;
  event=new Event;

  constructor(private route:ActivatedRoute, private Eventservice:EventServiceService, private formBuilder:FormBuilder) {
    this.eventEdit = this.formBuilder.group({
      title: ['',[Validators.required]],
      description: ['',[Validators.required]],
      venue: ['', [Validators.required]],
      from: ['', [Validators.required]],
      to: ['', [Validators.required]],
      recurrence: ['', [Validators.required]],
      partcipantType: ['', [Validators.required]],
      isPoll: ['']

    },
      {validators:dateLessThan('from','to')},
      
    );
   }

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
