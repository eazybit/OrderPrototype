/**
 * created by Yu Zhang on 4/1/18
 * Description: 
 * 
 * ------ maintenance history ------
 */

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'drawer-menu',
    templateUrl: './components/drawer-menu/drawer-menu.component.html',
    styleUrls: ['./components/drawer-menu/drawer-menu.component.scss']
})
export class DrawerMenuComponent implements OnInit {
    @Input() items: Array<string>;
    @Output() itemOnTap = new EventEmitter();

    constructor() { }

    ngOnInit(): void { }
}
