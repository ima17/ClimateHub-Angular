import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-user-editing',
  templateUrl: './user-editing.component.html',
  styleUrls: ['./user-editing.component.scss']
})
export class UserEditingComponent implements OnInit {
  users:any;
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getUsersData();
  }

  getUsersData(){
    this.dataService.getData().subscribe(res => {
      this.users = res;
    });
  }

  deleteData(id){
    this.dataService.deleteData(id).subscribe(res => {
      this.getUsersData()
    })
  }
 
}
