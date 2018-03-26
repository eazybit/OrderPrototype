import { Injectable } from '@angular/core';
import firebase = require('nativescript-plugin-firebase');

@Injectable()
export class AuthService {
    login(email: string, password: string) {
        firebase.login({
            type: firebase.LoginType.PASSWORD, 
            passwordOptions: {
                email: email,
                password: password
        }})
        .then((user) => alert(`User uid: ${user.uid}`))
        .catch((err) => alert(`Your credentials doesn't match our record, error: ${err}`));
    }
}