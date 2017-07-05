import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {urmRoutes} from './urm-routes';
//import { AdminComponent } from './admin/admin.component';

import {AuthGuard} from '../.././auth.guard';

@NgModule({
  declarations: [

  ],
  exports: [
  
  ],
  imports: [
    CommonModule,
    urmRoutes
  ],
  providers:[AuthGuard]
})
export class UrmModule { }
