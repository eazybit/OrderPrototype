/**
 * created by Yu Zhang on 3/28/18
 */
import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { HomePageComponent } from './home-page.component';

@NgModule({
    imports: [
        NativeScriptRouterModule.forChild([
            { path: 'home', component: HomePageComponent }
        ])
    ]
})
export class HomeRoutingModule {}