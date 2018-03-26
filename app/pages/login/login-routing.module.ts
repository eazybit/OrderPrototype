/**
 * created by Yu Zhang on 3/23/18
 */
import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { LoginPageComponent } from './login-page.component';

@NgModule({
    imports: [
        NativeScriptRouterModule.forChild([
            { path: 'login', component: LoginPageComponent,  }
        ])
    ]
})
export class LoingRoutingModule {}
