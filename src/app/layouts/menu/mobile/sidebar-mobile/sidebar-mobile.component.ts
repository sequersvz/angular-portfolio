import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-mobile',
  templateUrl: './sidebar-mobile.component.html',
  styleUrls: ['./sidebar-mobile.component.sass']
})
export class SidebarMobileComponent implements OnInit {
  openSidebar = false;
  openSidebarLogo = false;

  constructor() { }

  ngOnInit(): void {

  }

  handleEvent() {
    if(this.openSidebarLogo) {
      setTimeout(() => {
        this.openSidebarLogo = !this.openSidebarLogo;
      }, 600);
      this.openSidebar = !this.openSidebar;
      return;
    }

    this.openSidebar = !this.openSidebar;
    this.openSidebarLogo = !this.openSidebarLogo;
  }

}
