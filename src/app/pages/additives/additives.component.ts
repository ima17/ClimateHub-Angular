import { Component, OnInit } from '@angular/core';
import { ProjectDataService } from 'src/app/Services/project-data.service';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-additives',
  templateUrl: './additives.component.html',
  styleUrls: ['./additives.component.scss']
})
export class AdditivesComponent implements OnInit {

  publicAdditives:any;
  privateAdditives:any;
  public loggedIn :boolean;

  constructor(
    private dataService:ProjectDataService,
    private Auth: AuthService,
    private router: Router,
    private Token: TokenService
    ) { }

  ngOnInit(): void {
    this.getPublicAdditivesData();
    this.getPrivateAdditivesData();
    this.Auth.authStatus.subscribe(value => this.loggedIn = value);

  }

  getPublicAdditivesData(){
    this.dataService.getPublicAdditivesData().subscribe(res =>{
      this.publicAdditives=res;
    });
  };

  getPrivateAdditivesData(){
    this.dataService.getPrivateAdditivesData().subscribe(res =>{
      this. privateAdditives=res;
    });
  };

  logout(event: MouseEvent){
    event.preventDefault();
    this.Token.remove();
    this.Auth.changeAuthStatus(false);
    this.router.navigateByUrl('/additives');
}

}
