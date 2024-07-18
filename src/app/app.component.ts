import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { DataBindingComponent } from "./data-binding/data-binding.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DataBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private router:Router){}

  title = 'angularcheck';

  goToDataBinding(){
    this.router.navigate(["dataBinding"])
  }

  goToDirectives(){
    this.router.navigate(["directives"])
  }

  goToPipes(){
    this.router.navigate(["pipes"])
  }

  goToObserAndServi(){
    this.router.navigate(["obserAndServi"])
  }
}
