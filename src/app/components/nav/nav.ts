import { Component } from "@angular/core";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector:'app-nav',
    templateUrl:'./nav.html',
    styleUrl:'./nav.css',
    standalone:true,
    imports:[FooterComponent]
})

export class NavComponent{

}