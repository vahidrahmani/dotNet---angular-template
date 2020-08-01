import { Component, OnInit } from '@angular/core';
import { SideNavMansger } from "../side-nav/navItems";
import { UtilityService } from '@shared/service/utility.service';
import { of, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { NavService } from '../side-nav/nav.service';

@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['../style.scss']
})
export class ContentLayoutComponent extends SideNavMansger implements OnInit {
  showScroll: boolean = false;
  public theme = 'light-theme';
  constructor(
    public navServise: NavService,
    public utility: UtilityService,
  ) {
    super(navServise);
    this.getBox();
  }

  ngOnInit(): void {
    this.openNav();
    this.utility.getUserActivePanel()
      .pipe(
        catchError((error: any) => of(alert(error)))
      ).subscribe();
  }

  scroll(event) {
    const currentScroll = event.currentTarget.scrollTop;
    if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight && currentScroll > 500) {
      let current_url = window.location.href.split('#')[1];
      if (current_url.includes('dashboard/inbox')) {
        this.utility.scrollOnSearchPage.next(true);
      } 
    }
    //-----show btn scroll to top
    if (currentScroll > 500) {
      this.showScroll = true;

    } else {
      this.showScroll = false;
    }
  }
  scrollToTop() {
    (function smoothscroll() {
      var currentScroll = document.documentElement.querySelector(".main").scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        document.documentElement.querySelector(".main").scrollTo(0, currentScroll - (currentScroll / 5));
      }
    })();
  }

}


