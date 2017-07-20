
import { Routes, RouterModule } from '@angular/router';
import { GuestComponent } from './guest/guest.component';
import {AuthGuard} from '../.././auth.guard';
const routes: Routes = [
    { path: '', 
      loadChildren: './request-access/request-access.module#RequestAccessModule',
      canActivate:[AuthGuard]
    },
    {
        path:'admin',
        loadChildren: './admin/admin.module#AdminModule'
    },
    {
        path:'manager',
        loadChildren: './manager/manager.module#ManagerModule'
    },
    {
        path:'guest',
        loadChildren: './guest/guest.module#GuestModule'
    }

];
export const urmRoutes = RouterModule.forChild(routes);

