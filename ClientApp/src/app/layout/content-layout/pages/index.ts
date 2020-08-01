import { PanelListComponent } from './panel-list/panel-list.component';
import { FactorComponent } from './factor/factor.component';
import { BankResponseComponent } from './factor/bank-response/bank-response.component';
import { NewInboxComponent } from './new-inbox/new-inbox.component';
import { EditInboxComponent } from './new-inbox/edit-inbox.component';
import { SearchComponent } from './search/search.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserInfoComponent } from "./user-info/user-info.component";
import { SearchChartComponent } from './search/search-chart/search-chart.component';
import { ReportsComponent } from './reports/reports.component';
import { ComparisonComponent } from './comparison/comparison.component';
import { SettingComponent } from './setting/setting.component';
import { EditSocialNetworkComponent } from './setting/components/edit-social-network/edit-social-network.component';
import { NewMessageComponent } from './search/new-message/new-message.component';
import { SeenMessageComponent } from './search/seen-message/seen-message.component';
import { FavoritMessageComponent } from './search/favorit-message/favorit-message.component';
import { SpamMessageComponent } from './search/spam-message/spam-message.component';
import { SakoComponent } from './setting/components/sako/sako.component';
export const components: any[] = [ 
  PanelListComponent,
  FactorComponent,
  BankResponseComponent,
  NewInboxComponent, 
  EditInboxComponent,
  SearchComponent,
  DashboardComponent,
  UserInfoComponent,
  SearchChartComponent,
  ReportsComponent,
  ComparisonComponent, SeenMessageComponent, FavoritMessageComponent,
  SettingComponent, EditSocialNetworkComponent, NewMessageComponent, SpamMessageComponent,
  SakoComponent
];

export * from './panel-list/panel-list.component';
export * from './factor/factor.component';
export * from './factor/bank-response/bank-response.component';
export * from './new-inbox/new-inbox.component';
export * from './new-inbox/edit-inbox.component';
export * from './search/search.component';
export * from './dashboard/dashboard.component';
export * from './user-info/user-info.component';
export * from './search/search-chart/search-chart.component';
export *  from './reports/reports.component';
export * from './comparison/comparison.component';
export * from './setting/setting.component';
export * from './setting/components/edit-social-network/edit-social-network.component';
export * from './search/new-message/new-message.component';
export * from './search/seen-message/seen-message.component';
export * from './search/favorit-message/favorit-message.component';
export * from './search/spam-message/spam-message.component';
export * from './setting/components/sako/sako.component'
