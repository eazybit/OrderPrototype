import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

@NgModule({
    imports: [
        NativeScriptRouterModule.forRoot([
            { path: '', redirectTo: '/login', pathMatch: 'full'}
        ])
    ]
})
export class AppRoutingModule {}