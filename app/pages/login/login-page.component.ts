/**
 * created by Yu Zhang on 3/23/18
 */
import { Component } from '@angular/core';
import { TextField } from 'ui/text-field';

import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'login-page',
    templateUrl: './pages/login/login-page.component.html',
    styleUrls: ['./pages/login/login-page.component.css']
})
export class LoginPageComponent {
    private _email: string;
    private _password: string;

    constructor(private _authService: AuthService) {}

    private _userNameOnChange(args) {
        this._email = (<TextField>args.object).text.toString();
    }

    private _passwordOnChange(args) {
        this._password = (<TextField>args.object).text.toString();
    }

    private _loginOnTap() {
        this._authService.login(this._email, this._password);
    }
}