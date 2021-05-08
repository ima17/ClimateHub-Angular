import { Component, OnInit } from '@angular/core';
// import swal from 'sweetalert2/dist/sweetalert2.js';
import Swal from 'sweetalert2/dist/sweetalert2.all.js';
import {EventServiceService } from 'src/app/services/event-service.service';
import {NgxPaginationModule} from 'ngx-pagination';


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  eventList: any;
  polling:any;
  page:any;

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
      Swal.fire({
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
        Swal.fire(
          'Deleted!',
          'The event is deleted.',
          'success'
        )
      }
    })
  }

  viewResult(event_id){
    this.EventService.getEventById(event_id).subscribe(response=>{
      this.eventList=response;
    })
    this.EventService.voteResult(event_id).subscribe(res=>{
      this.polling=res;
      alert('event name:'+ this.eventList.title +'\nvotes:'+this.polling.user_id);
    })
    
  }
}
