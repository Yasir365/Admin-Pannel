import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-pannel',
  template: `
  <section class="main">
    <app-sidebar></app-sidebar>
    
    <section class="home">
      <app-header></app-header>
      <div class="content">
        <router-outlet></router-outlet>
      </div>
    </section>
  </section>
  `,
  styles: [`
    @import url('/src/assets/variables.scss');

    .main {
        min-height: 100vh;
        background-color: var(--body-color);
    
        .home {
            position: relative;
            min-height: 100vh;
            left: 260px;
            width: calc(100% - 260px);
            transition: var(--tran-03);
            
            .content{
              padding: 1rem 2rem;
            }
        }
    
        .home.close {
            left: 60px !important;
            width: calc(100% - 78px) !important;
        }
    }
  `]
})
export class AdminPannelComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit() {
    this.toastr.success('Welcome to Admin Pannel', 'Success');
  }

}
