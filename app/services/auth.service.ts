import { Injectable } from '@angular/core';
import firebase = require('nativescript-plugin-firebase');
import { Observable } from 'rxjs/Observable';
import { fromPromise } from 'rxjs/observable/fromPromise';

@Injectable()
export class AuthService {
    login(email: string, password: string): Observable<any> {
        return fromPromise(firebase.login({
                type: firebase.LoginType.PASSWORD, 
                passwordOptions: {
                    email: email,
                    password: password
            }})
            .catch((err) => alert(`Your credentials doesn't match our record, error: ${err}`))
        );
    }
}