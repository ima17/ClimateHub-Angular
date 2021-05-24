import {Injectable} from '@angular/core';
import { CanDeactivate } from "@angular/router";
import { StartdiscussionComponent } from './startdiscussion.component';


@Injectable()
export class StartDiscussionServiceGuardService implements CanDeactivate<StartdiscussionComponent>{
    canDeactivate(component: StartdiscussionComponent): boolean{
        if(component.startdisscussionForm.dirty){
            return confirm('Are you Sure You Want to discard Changes!');
        }
        return true;
    }
}