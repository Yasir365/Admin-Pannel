import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-pannel',
  template: `
  <section class="main">
    <app-sidebar></app-sidebar>
    
    <section class="home">
      <router-outlet></router-outlet>
    </section>
  </section>
  `,
  styles: [`@import url('/src/assets/variables.scss');

  .main {
      min-height: 100vh;
      background-color: var(--body-color);
  
      .home {
          position: relative;
          min-height: 100vh;
          left: 250px;
          width: calc(100% - 250px);
          transition: var(--tran-03);
          padding: 1rem 2rem;
  
  
      }
  
      .home.close {
          left: 78px !important;
          width: calc(100% - 78px) !important;
      }
  }`]
})
export class AdminPannelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
