import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { JarwisService } from 'src/app/services/jarwis.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.scss']
})
export class EditUsersComponent implements OnInit {

  public form={
    email:null,
    password:null,
    name:null,
    institute:null,
    mobile:null,
    password_confirmation:null,
    username:null,
    profession:null,
    user_type:null 
  };

  public error = [];
 

  constructor(
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService
  ) { }

  onSubmit(){
    this.form.user_type="USER";
    this.Jarwis.registeruser(this.form).subscribe(
       data => this.handleResponse(data),
       error => this.handleError(error)
     ); 
      

  }

  handleResponse(data){
    this.Token.handle(data.access_token);
    this.Auth.changeAuthStatus(true);
    this.router.navigateByUrl('/admin-profile');
  }

  handleError(error){
    this.error=error.error.errors;
  }

  ngOnInit(): void {
  }

}
