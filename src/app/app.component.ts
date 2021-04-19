import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BreadcrumbService,Breadcrumb } from 'angular-crumbs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'climateHub';

  constructor(private titleService:Title,private breadcrumbService:BreadcrumbService){
}

ngOnInit():void{
  this.breadcrumbService.breadcrumbChanged.subscribe(crumbs=>{
    this.titleService.setTitle(this.createTitle(crumbs));
  })
}

private createTitle(routesCollection:Breadcrumb[]){
  const title='climateHub';
  const titles=routesCollection.filter((route)=>route.displayName);

  if(!titles.length) {return title;}

  const routeTitle=this.titlesToString(titles);
  return ` ${title} ${routeTitle}`;
}

private titlesToString(titles){
  return titles.reduce((prev,curr)=>{
  return `${prev}-${curr.displayName}`;
  },'');
}


}
