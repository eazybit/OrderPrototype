/**
 * created by Yu Zhang on 3/23/18
 */
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router'; 
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

import firebase = require('nativescript-plugin-firebase');

import { AppRoutingModule } from './app.routing.module';
import { LoginModule } from './pages/login/login.module';

import { AppComponent } from './app.component';

firebase
    .init()
    .then(() => console.log('Firebase initialized!'))
    .catch((err) => console.error(`Firebase initialization error: ${err}`));

@NgModule({
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        NativeScriptRouterModule,
        AppRoutingModule,
        LoginModule
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
