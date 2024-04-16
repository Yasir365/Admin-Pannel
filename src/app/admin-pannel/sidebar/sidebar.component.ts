import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  darkMode = false;
  sidebar: any;
  home: any;
  body: any;
  sidebar_state: boolean = false;
  constructor() { }

  @HostListener("window:resize", ["$event"])
  onResize(event: Event): void {
    this.ngOnInit();
  }

  ngOnInit() {
    this.sidebar = document.querySelector('.sidebar');
    this.home = document.querySelector('.home');
    this.body = document.querySelector('body');

    this.darkMode = localStorage.getItem('dark_mode') == 'true' ? true : false;

    if (this.darkMode) {
      this.body?.classList.add('dark');
      localStorage.setItem('dark_mode', 'true');
      this.darkMode = true;
    }

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
        this.sidebar_state = true;
      }
    }

  }

  toggleDarkMode() {

    if (this.body?.classList.contains('dark')) {
      this.body.classList.remove('dark');
      localStorage.setItem('dark_mode', 'false');
      this.darkMode = false;
    } else {
      this.body?.classList.add('dark');
      localStorage.setItem('dark_mode', 'true');
      this.darkMode = true;
    }
  }

  toggleSidebar() {
    if (this.sidebar?.classList.contains('close')) {
      this.sidebar.classList.remove('close');
      this.sidebar_state = true;
      this.home?.classList.remove('close');
      localStorage.setItem('sidebar_state', 'open');
    } else {
      this.sidebar?.classList.add('close');
      this.home?.classList.add('close');
      this.sidebar_state = false;
      localStorage.setItem('sidebar_state', 'close');
    }
  }
}
