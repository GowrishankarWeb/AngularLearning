import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule, NgClass, NgStyle ],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
    title:string='data binding'
    // .. means go back one folder

    //attribute binding
    imageSource:string='../assets/ironman.jpg'
    imgWidth=100;
    imgHeight=100;

    increaseImageSize(){
      this.imgWidth=this.imgWidth+50;
      this.imgHeight=this.imgHeight+50;
    }

    decreaseImageSize(){
      if(this.imgWidth>100 && this.imgHeight>100){
        this.imgWidth=this.imgWidth-50;
        this.imgHeight=this.imgHeight-50;
      }
    }

    //style binding
    bgColor:string='grey'
    titleColor:string='red'
    content:string="color:blue;font-size:40px"

    //class binding
    classValue:string='yes';

    value:string='blue';
    changeRed(val:string){
      this.value=val;
    }
    changeBlack(val:string){
      this.value=val;
    }

    //two way binding
    inputText:string="New Text";

    //ngClass
    dangerClass='danger'

    changeToNormal(){
      this.dangerClass='normal';
    }
    changeToDanger(){
      this.dangerClass='danger';
    }
}
