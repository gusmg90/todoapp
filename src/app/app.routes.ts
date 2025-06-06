import { Routes } from '@angular/router';
import {Home} from './pages/home/home';
import {Labs} from './pages/home/labs';
export const routes: Routes = [
{

    path: '',
    component: Home
},
{
    path: 'labs',
    component: Labs
},
{
    path: 'home',
    component: Labs
}

];
