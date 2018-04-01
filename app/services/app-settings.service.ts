/**
 * created by Yu Zhang on 3/23/18
 */
import { Injectable } from '@angular/core';
import * as AppSettings from 'application-settings';

@Injectable()
export class AppSettingsService {
    getEmail() {
        return AppSettings.getString('email');
    }

    setEmail(email: string) {
        AppSettings.setString('email', email);
    }

    removeEmail() {
        return AppSettings.remove('email');
    }

    getUID() {
        return AppSettings.getString('uid');
    }

    setUID(uid: string) {
        return AppSettings.setString('uid', uid);
    }

    removeUID() {
        return AppSettings.remove('uid');
    }
}