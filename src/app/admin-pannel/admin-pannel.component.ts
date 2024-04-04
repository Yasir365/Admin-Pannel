import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-pannel',
  templateUrl: './admin-pannel.component.html',
  styleUrls: ['./admin-pannel.component.css']
})
export class AdminPannelComponent implements OnInit {
  toggle: any
  searchBtn: any
  modeSwitch: any
  toggleSwitch: any
  modeText: any

  darkMode = false;
  constructor() { }

  ngOnInit() {
    this.toggle = document.querySelector('.toggle');
    this.searchBtn = document.querySelector('.search-box');
    this.modeSwitch = document.querySelector('.toggle-swich');
    this.modeText = document.querySelector('.mode-text');
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
    let sidebar = document.querySelector('.sidebar');

    if (sidebar?.classList.contains('close')) {
      sidebar.classList.remove('close');
    } else {
      sidebar?.classList.add('close');
    }
  }
}
