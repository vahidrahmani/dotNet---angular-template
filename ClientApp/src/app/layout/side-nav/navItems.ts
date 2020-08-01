import { NavItem } from '@models/Interface';
import { NavService } from './nav.service';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

export class SideNavMansger {
  public showNav: boolean = false;
  public isPanelActive = false;
  routName: string = '';
  constructor(public navServise: NavService) {
  }
  openNav() {
    if (!this.showNav) {
      this.showNav = true;
      document.getElementById("inner-sidenav").classList.add("w-224");
      document.getElementById("inner-sidenav").classList.remove("w-70");
      document.getElementById("main").classList.remove("col-xl-11");
      document.getElementById("main").classList.add("col-xl-10");
      document.getElementById("main").classList.add("pl-custom-open"); 
      document.getElementById("main").classList.add("pr-custom-open");
      document.getElementById("main").classList.remove("pl-custom-close");
      document.getElementById("main").classList.remove("pr-custom-close"); 
      document.getElementById("logo").style.width = "253px";
      document.getElementById("logo").classList.add("transition");
      document.querySelector('.logo-title')['style'].display = "block";
    } else {
      this.showNav = false;
      document.getElementById("inner-sidenav").classList.add("w-70");
      document.getElementById("inner-sidenav").classList.remove("w-224");
      document.getElementById("main").classList.remove("pl-custom-open");
      document.getElementById("main").classList.remove("pr-custom-open");
      document.getElementById("main").classList.add("pl-custom-close");
      document.getElementById("main").classList.add("pr-custom-close"); 
      document.getElementById("main").classList.remove("col-xl-10");
      document.getElementById("main").classList.add("col-xl-11");
      document.getElementById("logo").style.width = "62px";
      document.getElementById("logo").classList.add("transition");
      document.querySelector('.logo-title')['style'].display = "none";
    }
  }


  getBox() {
    // this.navServise.getBox()
    //   .pipe(
    //     tap(boxList => {
    //       this.addBox(boxList);
    //     }),
    //     catchError(error => of(alert(error))),
    //   ).subscribe();
  }

  private addBox(list: any) {
    this.navServise.NavItems = [];
    let index = 0;

    for (let item of list) {
      this.navServise.NavItems.push(
        {
          displayName: item.name,
          iconName: 'fa fa-inbox',
          route: '',
          permissionKey: 'havePanel',
          index: index++,
          children: [
            {
              displayName: 'اینباکس',
              iconName: 'fa fa-inbox',
              route: `dashboard/inbox/${item.pkBoxId}`,
              permissionKey: '',
              index: index++,
                  children: [
                // طبق تسک فعلا محتویات اینباکس غیر فعال میشود  
                //{
                //  displayName: 'ذخیره شده ها',
                //  iconName: 'fa fa-save',
                //  route: 'dashboard',
                //  permissionKey: '',
                //},
                //{
                //  displayName: 'گروه ها',
                //  iconName: 'fa fa-tags',
                //  route: 'dashboard',
                //  permissionKey: '',
                //},
                //{
                //  displayName: 'فیلتر ها',
                //  iconName: 'fa fa-tags',
                //  route: 'dashboard/',
                //  permissionKey: '',
                //}
              ]
            },
            {
              displayName: 'گزارش آماری',
              iconName: 'fa fa-chart-pie',
              route: `dashboard/reports/${item.pkBoxId}`,
              permissionKey: ''
            },
            {
              displayName: 'مقایسه آماری',
              iconName: 'fa fa-balance-scale',
              route: `dashboard/comparison/${item.pkBoxId}`,
              permissionKey: ''
            },
            {
              displayName: 'تنظیمات',
              iconName: 'fa fa-cog',
              route: `dashboard/setting/${item.pkBoxId}`,
              permissionKey: ''
            },
          ]
        }
      )

    }

  }
}


export const Admin_navItems: NavItem[] = [
  {
    displayName: 'مدیریت بسته ها',
    iconName: 'fa fa-user',
    route: '/admin/panelList',
    permissionKey: '',
    index: 1,
    children:[]
  }, {
    displayName: 'مدیریت کاربران',
    iconName: 'fa fa-user',
    route: '/admin/userList',
    permissionKey: '',
    index: 2,
    children: []
  }
]
