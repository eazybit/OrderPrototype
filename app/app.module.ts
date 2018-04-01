/**
 * created by Yu Zhang on 3/23/18
 */
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router'; 
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import firebase = require('nativescript-plugin-firebase');

import { AppRoutingModule } from './app.routing.module';
import { LoginModule } from './pages/login/login.module';
import { HomeModule } from './pages/home/home.module';

import { AppComponent } from './app.component';
import { AppState } from './redux/app.state';
import { appReducer } from './redux/app.reducers';
import { AppSettingsService } from './services/app-settings.service';
import { AuthEffects } from './redux/auth.effects';

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
        StoreModule.forRoot(appReducer),
        EffectsModule.forRoot([AuthEffects]),
        AppRoutingModule,
        LoginModule,
        HomeModule
    ],
    providers: [AppSettingsService],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
