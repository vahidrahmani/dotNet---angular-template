import { NgModule } from '@angular/core';
import { LoginComponent} from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';
import { AuthRoutingModule } from './auth.routing';
import { SharedModule } from '@shared/shared.module';
import { ForgotPassComponent } from './page/forgot-pass/forgot-pass.component';
import { NumericInput } from './directive/numeric-input.directive';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent, ForgotPassComponent, NumericInput
  ],
  imports: [
    SharedModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
