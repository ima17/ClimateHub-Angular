import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { JarwisService } from 'src/app/services/jarwis.service';
import { TokenService } from 'src/app/services/token.service';

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

  public error = null;

  constructor( 
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService
    ) { }

  onSubmit(){
    this.Jarwis.login(this.form).subscribe(
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
    this.error=error.error.error;
  }

  ngOnInit(): void {
  }

}
