import {Routes, RouterModule} from '@angular/router';

import { LoginComponent } from './login/login.component';
import { LoggedInGuard } from './logged-in.guard';

const routes: Routes =[
	
	
	{ 	
		path: '', 
		loadChildren: './component/urm/analyst/analyst.module#AnalystModule',	
		canActivate: [ LoggedInGuard ] 
	},
	
	{ path: 'login', loadChildren: './login/login.module#LoginModule' },
	
];

export const appRoutes = RouterModule.forRoot(routes);
