
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent} from './admin.component';

const routes: Routes = [
    { path: '', component:  AdminComponent }
];
export const adminRoutes = RouterModule.forChild(routes);

