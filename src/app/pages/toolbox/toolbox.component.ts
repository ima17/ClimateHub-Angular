import { Component, OnInit } from '@angular/core';
import { ProjectDataService } from 'src/app/Services/project-data.service';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.scss']
})
export class ToolboxComponent implements OnInit {
  publicToolbox:any;
  privateToolbox:any;
  public loggedIn :boolean;


  constructor(
    private dataService:ProjectDataService,
    private Auth: AuthService,
    private router: Router,
    private Token: TokenService
    ) { }

  ngOnInit(): void {
    this.getPublicToolboxData();
    this.getPrivateToolboxData();
    this.Auth.authStatus.subscribe(value => this.loggedIn = value);
    
  }

  getPublicToolboxData(){
    this.dataService.getPublicToolBoxData().subscribe(res =>{
      this.publicToolbox=res;
    });
  };

  getPrivateToolboxData(){
    this.dataService.getPrivateToolBoxData().subscribe(res =>{
      this. privateToolbox=res;
    });
  };

  logout(event: MouseEvent){
    event.preventDefault();
    this.Token.remove();
    this.Auth.changeAuthStatus(false);
    this.router.navigateByUrl('/toolbox');
  }


  
}
