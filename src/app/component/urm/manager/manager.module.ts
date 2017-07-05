import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerComponent} from './manager.component';
import {managerRoutes } from './manager.route'

@NgModule({
  declarations: [
   ManagerComponent
  ],
  exports: [
   
  ],
  imports: [
    CommonModule,
    managerRoutes
  ]
})
export class ManagerModule { }
