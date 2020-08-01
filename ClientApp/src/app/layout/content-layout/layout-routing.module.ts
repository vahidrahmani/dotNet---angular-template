import { Routes, RouterModule } from "@angular/router";
import * as dashboardPages from "./pages";
import { NgModule } from '@angular/core';

const Pages_Routs: Routes = [

  {
    path: '',
    component: dashboardPages.DashboardComponent,
    data: {
      permissions: {
        only: ['havePanel'],
        redirectTo: '/dashboard/panelList'
      }
    }
  },
  { 
    path: 'reports/:inboxId',
    component: dashboardPages.ReportsComponent,
    data: {
      permissions: {
        only: ['havePanel'],
        redirectTo: '/dashboard/panelList'
      }
    }
  },
  {
    path: 'setting/:inboxId', 
    component: dashboardPages.SettingComponent,
    data: {
      permissions: {
        only: ['havePanel'],
        redirectTo: '/dashboard/panelList'
      }
    }
  },
  {
    path: 'comparison/:inboxId',
    component: dashboardPages.ComparisonComponent,
    data: {
      permissions: {
        only: ['havePanel'],
        redirectTo: '/dashboard/panelList'
      }
    }
  },
  {
    path: 'panelList',
    component: dashboardPages.PanelListComponent

   },
   {
     path: 'factor',
     component: dashboardPages.FactorComponent
   },{
     path: 'newInbox',
     children: [
       {
         path: '',
         component: dashboardPages.NewInboxComponent
       }, {
         path: ':id',
         component: dashboardPages.EditInboxComponent
       }
     ],
     data: {
       permissions: {
         only: ['havePanel'],
         redirectTo: '/dashboard/panelList'
       }
     }
   
   },
   {
     path: 'bankResponse',
     component: dashboardPages.BankResponseComponent
  },
  {
    path: 'userInfo',
    component: dashboardPages.UserInfoComponent,

  },
  {
    path: 'inbox/:inboxId',
    component: dashboardPages.SearchComponent,
    data: {
      permissions: {
        only: ['havePanel'],
        redirectTo: '/dashboard/panelList'
      }
    }
  },

   {
     path: '**',
     redirectTo: '/dashboard', pathMatch: 'full'
   },

]

@NgModule({
  imports: [RouterModule.forChild(Pages_Routs)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }

