import { Component } from '@angular/core';
import { ColorsComponent } from '../colors/colors.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FormsModule,ColorsComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  price:number=663;
  name:string='dell';
  imgsrc='../../../assets/images/3.jpg'
  imgsrc2='../../../assets/images/4.jpg'
  styl='color: red;'
  btn='bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
  user:string='';
  welcome(){
    alert("Samy")
  }
}
