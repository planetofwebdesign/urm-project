
import { Routes, RouterModule } from '@angular/router';
import { AnalystComponent } from './analyst.component';

const routes: Routes = [
    { path: '', component:  AnalystComponent }
];
export const analystRoutes = RouterModule.forChild(routes);

