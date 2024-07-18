import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-obser-and-servi',
  standalone: true,
  imports: [],
  providers:[DataService],
  templateUrl: './obser-and-servi.component.html',
  styleUrl: './obser-and-servi.component.css'
})
export class ObserAndServiComponent {

}
