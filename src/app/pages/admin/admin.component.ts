import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public form={
    email:null,
    password:null
  }

  constructor( private http:HttpClient) { }

  onSubmit(){
     return this.http.post('http://localhost:8000/api/login',this.form).subscribe(
       data => console.log(data),
       error => console.log(error)
     );
      

  }

  ngOnInit(): void {
  }

}
