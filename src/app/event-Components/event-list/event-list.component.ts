import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2/dist/sweetalert2.js';
import {EventServiceService } from 'src/app/services/event-service.service';


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  eventList: any;

  constructor(private EventService: EventServiceService) { }

  ngOnInit(): void {
    this.getEventData();
  }

  getEventData(){
    this.EventService.getData().subscribe(res=>{
      this.eventList=res;
    });
  }

  deleteEvent(id){
    swal.fire({
      title: 'Do you want to delete this event?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.EventService.deleteEvent(id).subscribe(res=>{
          this.getEventData();
          
        });
        swal.fire(
          'Deleted!',
          'The event is deleted.',
          'success'
        )
      }
    })
  }
}
