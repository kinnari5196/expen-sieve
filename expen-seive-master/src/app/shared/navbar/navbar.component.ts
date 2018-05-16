import { Component, OnInit, ElementRef, ChangeDetectorRef } from '@angular/core';
import { ROUTES } from '../../sidebar/sidebar.component';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}


@Component({
    // moduleId: module.id,
    selector: 'navbar-cmp',
    templateUrl: 'navbar.component.html'
})

export class NavbarComponent implements OnInit{

    private listTitles: any[];
    location: Location;
    private toggleButton: any;
    private sidebarVisible: boolean;

    constructor(location: Location,  private element: ElementRef, private cdr: ChangeDetectorRef) {
      this.location = location;
          this.sidebarVisible = false;
    }

    ngOnInit(){
      this.listTitles = ROUTES.filter(listTitle => listTitle);
      const navbar: HTMLElement = this.element.nativeElement;
      this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
    }

    ngAfterViewChecked() {
        this.cdr.detectChanges();
    }

    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const body = document.getElementsByTagName('body')[0];
        setTimeout(function(){
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');

        this.sidebarVisible = true;
    };
    sidebarClose() {
        const body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
    };

    getTitle(){
      var titlee = this.location.prepareExternalUrl(this.location.path());
      titlee = titlee.split('/').pop();
      for(var item = 0; item < this.listTitles.length; item++){
          if(this.listTitles[item].path === titlee){
              let title = this.listTitles[item].title;
              
              return title;
          }
      }
      
      return 'Dashboard';
    }

    logoutUser(){
        localStorage.setItem('isLoggedIn', 'false');
        localStorage.setItem('businessId','0');
    }
}
