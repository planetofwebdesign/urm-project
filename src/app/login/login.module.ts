import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { loginRoutes } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
    imports: [
        CommonModule,
        loginRoutes
    ],
    declarations: [LoginComponent]
})
export class LoginModule {
}
