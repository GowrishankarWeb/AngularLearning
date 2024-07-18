import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [NgIf],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  isLoggedIn:boolean=false;
  userName:string="Gowri"

  items:string[]=['Hi','Hello','Welcome','Greetings'];
}
