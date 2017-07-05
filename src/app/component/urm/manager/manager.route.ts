
import { Routes, RouterModule } from '@angular/router';
import { ManagerComponent } from './manager.component';

const routes: Routes = [
    { path: '', component:  ManagerComponent }
];
export const managerRoutes = RouterModule.forChild(routes);

