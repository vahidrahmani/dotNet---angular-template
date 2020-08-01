import { HeaderComponent } from './header/header.component';
import { ContentLayoutComponent } from './content-layout/content-layout.component'
import { AuthLayoutComponent } from './auth-layout/auth-layout.component'
import { SideNavComponent } from './side-nav/side-nav.component';
import { AdminComponent } from '@admin/admin.component';

export const components: any[] = [
  HeaderComponent,  ContentLayoutComponent, AuthLayoutComponent, SideNavComponent,
  AdminComponent
];

export * from './header/header.component';
export * from './content-layout/content-layout.component';
export * from './auth-layout/auth-layout.component';
export * from './side-nav/side-nav.component';
export * from '@admin/admin.component';
