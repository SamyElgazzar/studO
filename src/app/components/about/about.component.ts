import { Component } from "@angular/core";
import { EmpComponent } from "../emp/emp.component";

@Component({
    selector:'app-about',
    templateUrl:'./about.html',
    styleUrl:'./about.css',
    standalone:true,
    imports :[EmpComponent]
})

export class AboutComponent{
    
}