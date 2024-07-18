import { Component } from '@angular/core';
import { LowerCasePipe, UpperCasePipe, CurrencyPipe, DatePipe, PercentPipe } from '@angular/common';
import { Append1234Pipe } from '../customPipes/append1234.pipe';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [LowerCasePipe, UpperCasePipe, CurrencyPipe, DatePipe, PercentPipe, Append1234Pipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  newVal:string="Gowrishankar"
  today:number=Date.now();

  currency:number=1.254796;
}
