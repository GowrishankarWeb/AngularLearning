import { Routes } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { ObserAndServiComponent } from './obser-and-servi/obser-and-servi.component';

export const routes: Routes = [
    {
        path:"dataBinding",
        component:DataBindingComponent
    },
    {
        path:"directives",
        component:DirectivesComponent
    },
    {
        path:"pipes",
        component:PipesComponent
    },
    {
        path:"obserAndServi",
        component:ObserAndServiComponent
    },
];
