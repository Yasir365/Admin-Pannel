import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dragIconId!: number;
  dropTileId!: number;

  constructor() { }

  ngOnInit() {
  }
  public card_items = [
    { id: 0, name: "Total Users", value: 45, bg_color: "#FFC107" },
    { id: 1, name: "Active Users", value: 25, bg_color: "#0DCAF0" },
    { id: 2, name: "Blocked Users", value: 15, bg_color: "#F8F9FA" },
    { id: 3, name: "Total Orders", value: 105, bg_color: "#F7BAC5" },
    { id: 4, name: "Completed Orders", value: 67, bg_color: "#D2AA84" },
    { id: 5, name: "Pending Orders", value: 38, bg_color: "#11C15B" },
  ];

  public onIconDropped(ev: any) {
    ev.drag.dropFinished();
  }

  public onEnterHandler(ev: any): void {
    this.dropTileId = parseInt(ev.owner.element.nativeElement.id, 10);
    // the event gets raised immediately, but we want to swap only when we drag over another icon
    if (this.dragIconId === this.dropTileId) {
      return;
    }
    const dragIndex = this.card_items.findIndex((iconObj) => iconObj.id === this.dragIconId);
    const dropIndex = this.card_items.findIndex((iconObj) => iconObj.id === this.dropTileId);
    this.swapIcons(dragIndex, dropIndex);
  }

  public dragStartHandler(id: number): void {
    this.dragIconId = id;
  }

  public dragEndHandler(dragRef: HTMLElement) {
    dragRef.style.visibility = 'visible';
  }

  public ghostCreateHandler(dragRef: HTMLElement) {
    dragRef.style.visibility = 'hidden';
  }

  private swapIcons(dragIndex: number, dropIndex: number) {
    const tempObj = this.card_items[dragIndex];
    this.card_items.splice(dragIndex, 1);
    this.card_items.splice(dropIndex, 0, tempObj);
  }

}
