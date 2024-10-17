import { Routes } from '@angular/router';
import { MySecondCompComponent } from './my-second-comp/my-second-comp.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    {
        path:'home',
        component:MySecondCompComponent
    },
    {
        path:'about',
        component:AboutComponent
    },
    {
        path:'about/:username',
        component:AboutComponent
    }

];
