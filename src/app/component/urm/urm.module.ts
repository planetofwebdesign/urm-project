import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {urmRoutes} from './urm-routes';
import { AdminComponent } from './admin/admin.component';



@NgModule({
  declarations: [
   
  AdminComponent],
  exports: [
   
  ],
  imports: [
    CommonModule,
  
    urmRoutes
  ]
})
export class UrmModule { }
