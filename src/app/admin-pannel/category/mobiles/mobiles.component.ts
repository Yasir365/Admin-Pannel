import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.scss']
})
export class MobilesComponent implements OnInit {
  mobiles:any=[]
  constructor() { }

  ngOnInit() {

    this.mobiles=[
      {name:"Mobile1", delay:300, img:"assets/mobile/mobile1.jpeg"},
      {name:"Mobile1", delay:400, img:"assets/mobile/mobile2.jpeg"},
      {name:"Mobile1", delay:500, img:"assets/mobile/mobile3.jpeg"},
      {name:"Mobile1", delay:600, img:"assets/mobile/mobile4.jpeg"},
      {name:"Mobile1", delay:650, img:"assets/mobile/mobile5.jpeg"},
      {name:"Mobile1", delay:700, img:"assets/mobile/mobile6.jpeg"},
      {name:"Mobile1", delay:750, img:"assets/mobile/mobile1.jpeg"},
      {name:"Mobile1", delay:800, img:"assets/mobile/mobile2.jpeg"},
      {name:"Mobile1", delay:825, img:"assets/mobile/mobile3.jpeg"},
      {name:"Mobile1", delay:850, img:"assets/mobile/mobile4.jpeg"},
      {name:"Mobile1", delay:875, img:"assets/mobile/mobile5.jpeg"},
      {name:"Mobile1", delay:900, img:"assets/mobile/mobile6.jpeg"},
    ]
  }

}
