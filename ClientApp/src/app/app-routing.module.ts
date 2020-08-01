import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { AuthGuard } from './core/guard/auth.guard';
import { NgxPermissionsGuard } from 'ngx-permissions';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/dashboard',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'dashboard',
  //   component: ContentLayoutComponent,
  //   canActivate: [AuthGuard],
  //   canLoad: [NgxPermissionsGuard],
  //   canActivateChild: [NgxPermissionsGuard],
  //   loadChildren: "@dashbord/layout.module#LayoutModule",
  //   data: {
  //     permissions: {
  //       only: ['USER', 'ADMIN'],
  //       redirectTo: '/auth/login'
  //     }
  //   }
  // },
  // {
  //   path: 'admin',
  //   component: AdminComponent,
  //   canActivate: [AuthGuard],
  //   canLoad: [NgxPermissionsGuard],
  //   loadChildren: "@admin/admin.module#AdminModule",
  //   data: {
  //     permissions: {
  //       only: ['ADMIN'],
  //       redirectTo: '/dashboard'
  //     }
  //   }
  // },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    loadChildren:"app/layout/auth/auth.module#AuthModule"
  },
  // Fallback when no prior routes is matched
  { path: '**', redirectTo: '/auth/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
