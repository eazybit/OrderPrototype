/**
 * created by Yu Zhang on 3/28/18
 */
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular';

import { HomeRoutingModule } from './home-routing.module';

import { HomePageComponent } from './home-page.component';
import { DrawerMenuComponent } from '../../components/drawer-menu/drawer-menu.component';

@NgModule({
    declarations: [ 
        HomePageComponent,
        DrawerMenuComponent
    ],
    exports: [ 
        HomePageComponent 
    ],
    imports: [ 
        HomeRoutingModule,
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        NativeScriptUISideDrawerModule
    ],
    schemas: [ NO_ERRORS_SCHEMA ]
})
export class HomeModule {}