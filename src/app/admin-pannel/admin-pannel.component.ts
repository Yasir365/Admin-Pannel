import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-pannel',
  templateUrl: './admin-pannel.component.html',
  styleUrls: ['./admin-pannel.component.css']
})
export class AdminPannelComponent implements OnInit {
  darkMode = false;


  constructor() { }

  ngOnInit() {
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
