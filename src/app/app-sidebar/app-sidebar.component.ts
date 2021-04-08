import {Component, OnInit} from '@angular/core';
import {NavState} from "../store/nav/nav.state";
import {Select} from "@ngxs/store";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
    selector: 'app-sidebar',
    templateUrl: './app-sidebar.component.html',
    styleUrls: ['./app-sidebar.component.scss']
})
export class AppSidebarComponent implements OnInit {
    // @ts-ignore
    @Select(NavState.getChangedRole) changedRole: Observable<any>;
    menu = {
        index: true,
        alerts: true,
        customres: true,
        properties: true,
        devices: true
    };

    role: any;

    constructor(
        private _router: Router,
    ) {
    }

    ngOnInit(): void {
        this.changedRole.subscribe(res => {
            this.role = res;
        });
        this.role = localStorage.getItem('role')
    }

    logout = () => {
        localStorage.clear();
        window.location.href = '/'
    }

}
