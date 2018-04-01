/**
 * created by Yu Zhang on 3/23/18
 */
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { TextField } from 'ui/text-field';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';

import { AuthService } from '../../services/auth.service';
import { IAppState } from '../../redux/app.state';
import { AppSettingsService } from '../../services/app-settings.service';
import { LOGIN } from '../../redux/auth.actions';

@Component({
    selector: 'login-page',
    templateUrl: './pages/login/login-page.component.html',
    styleUrls: ['./pages/login/login-page.component.css']
})
export class LoginPageComponent implements OnInit, OnDestroy {
    private _uid: string;
    private _email: string;
    private _password: string;
    private _userSubscription$: Subscription;

    constructor(
        private _authService: AuthService, 
        private _store: Store<IAppState>,
        private _appSettingsService: AppSettingsService,
        private _router: Router
    ) {}

    ngOnInit() {
        this._userSubscription$ = this._store.pipe<any>(select('user'))
            .filter(user => user != null && user.uid != null)
            .subscribe(user => this._onSubscribeUser(user));

        this._uid = this._appSettingsService.getUID();
        if(this._uid && this._uid.length > 0) {
            this._navigateToHomeScreen();
        }
    }

    ngOnDestroy() {
        this._userSubscription$.unsubscribe();
    }

    private _userNameOnChange(args) {
        this._email = (<TextField>args.object).text.toString();
    }

    private _passwordOnChange(args) {
        this._password = (<TextField>args.object).text.toString();
    }

    private _loginOnTap() {
        this._store.dispatch({ 
            type: LOGIN, 
            payload: { 
                email : this._email, 
                password: this._password 
            }
        });
    }

    private _onSubscribeUser(user: any) {
        alert(user.uid);
        this._appSettingsService.setEmail(user.email);
        this._appSettingsService.setUID(user.uid);
        this._navigateToHomeScreen();
    }

    private _navigateToHomeScreen() {
        this._router.navigate(['home']);
    }
}