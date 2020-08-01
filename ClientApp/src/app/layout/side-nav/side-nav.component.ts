import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { NavItem } from '@models/Interface';
import { Router } from '@angular/router';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})

export class SideNavComponent   {
  constructor(public router: Router) {
    if (this.depth === undefined) {
      this.depth = 0;
    }
  }

  expanded: boolean = false;
  @Input() depth: number;
  @Input() item: NavItem;
  @Input() root: boolean = true;
  @Input() openClose: boolean = false;
     
  getToRout(item: NavItem) { 
      this.router.navigate([item.route]);
  }

     
}
