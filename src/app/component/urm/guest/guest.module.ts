import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestComponent} from './guest.component';
import {GuestRoutes } from './guest.route'

@NgModule({
  declarations: [
   GuestComponent
  ],
  exports: [
   
  ],
  imports: [
    CommonModule,
    GuestRoutes
  ]
})
export class GuestModule { }
