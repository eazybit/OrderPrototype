import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from './auth.actions';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthEffects {
  constructor(private _authService: AuthService, private _actions$: Actions) { }

  @Effect() login$ = this._actions$
    .ofType(LOGIN)
    .map(action => action as any)
    .map(action => action.payload)
    .switchMap(payload => this._authService.login(payload.email, payload.password)
        .map(res => ({ type: LOGIN_SUCCESS, payload: res }))
        .catch((err) => Observable.of({ type: LOGIN_FAILURE, payload: err.toString() }))
    );
}