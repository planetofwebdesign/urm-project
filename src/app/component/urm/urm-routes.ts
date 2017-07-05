
import { Routes, RouterModule } from '@angular/router';
import { AnalystComponent } from './analyst/analyst.component';
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
        path:'analyst',
        loadChildren: './analyst/analyst.module#AnalystModule'
    }

];
export const urmRoutes = RouterModule.forChild(routes);

