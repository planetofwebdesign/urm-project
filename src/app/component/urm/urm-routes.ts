
import { Routes, RouterModule } from '@angular/router';
import { AnalystComponent } from './analyst/analyst.component';

const routes: Routes = [
    { path: '', component:  AnalystComponent }
];
export const urmRoutes = RouterModule.forRoot(routes);

