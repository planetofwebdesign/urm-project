
import { Routes, RouterModule } from '@angular/router';
import { RequestAccessComponent } from './request-access.component';

const routes: Routes = [
    { path: '', component:  RequestAccessComponent }
];
export const requestAccessRoutes = RouterModule.forChild(routes);

