import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  darkMode = false;
  sidebar: any
  home: any
  constructor() { }

  @HostListener("window:resize", ["$event"])
  onResize(event: Event): void {
    this.ngOnInit();
  }

  ngOnInit() {
    this.sidebar = document.querySelector('.sidebar');
    this.home = document.querySelector('.home');


    let windowWidth = window.innerWidth;
    if (windowWidth <= 768) {
      this.sidebar?.classList.add('close');
      this.home?.classList.add('close');
    } else {
      let sidebar_state = localStorage.getItem('sidebar_state');
      if (sidebar_state == 'close') {
        this.sidebar?.classList.add('close');
        this.home?.classList.add('close');
        localStorage.setItem('sidebar_state', 'close');
      } else {
        this.sidebar.classList.remove('close');
        this.home?.classList.remove('close');
        localStorage.setItem('sidebar_state', 'open');
      }
    }

  }

  toggleDarkMode() {
    let body = document.querySelector('body');

    if (body?.classList.contains('dark')) {
      body.classList.remove('dark');
      this.darkMode = false;
    } else {
      body?.classList.add('dark');
      this.darkMode = true;
    }
  }

  toggleSidebar() {
    if (this.sidebar?.classList.contains('close')) {
      this.sidebar.classList.remove('close');
      this.home?.classList.remove('close');
      localStorage.setItem('sidebar_state', 'open');
    } else {
      this.sidebar?.classList.add('close');
      this.home?.classList.add('close');
      localStorage.setItem('sidebar_state', 'close');
    }
  }
}
