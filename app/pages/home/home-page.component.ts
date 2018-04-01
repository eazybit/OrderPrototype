/**
 * created by Yu Zhang on 3/28/18
 */
import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { TextField } from 'ui/text-field';
import { Subscription } from 'rxjs/Subscription';
import { RadSideDrawerComponent, SideDrawerType } from 'nativescript-ui-sidedrawer/angular';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';

import { AuthService } from '../../services/auth.service';
import { IAppState } from '../../redux/app.state';
import { AppSettingsService } from '../../services/app-settings.service';

@Component({
    moduleId: module.id,
    selector: 'login-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit, OnDestroy {
    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;

    private _menuItems = ['订单', '定价', '运费', '现货', '箱子'];
    private drawer: RadSideDrawer;

    constructor(
        private _changeDetectorRef: ChangeDetectorRef
    ) {}

    ngOnInit() {
       
    }

    ngOnDestroy() {
        
    }

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectorRef.detectChanges();
    }

    private _menuItemOnTap(args) {
        alert(`${args.index}: ${args.item}`);
    }
}