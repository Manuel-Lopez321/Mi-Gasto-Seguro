import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './components/auth/change-password/change-password.component';
import { ChangePasswordCodeComponent } from './components/auth/change-password-code/change-password-code.component';
import { ChangePasswordEmailComponent } from './components/auth/change-password-email/change-password-email.component';
import { CreateAccountComponent } from './components/auth/create-account/create-account.component';
import { LoginComponent } from './components/auth/login/login.component';
import { VerifyEmailComponent } from './components/auth/verify-email/verify-email.component';
import { HomePageComponent } from './components/home/home-page/home-page.component';
import { HomeUserType1Component } from './components/home/home-user-type-1/home-user-type-1.component';
import { HomeUserType2Component } from './components/home/home-user-type-2/home-user-type-2.component';
import { TypeUserComponent } from './components/home/type-user/type-user.component';
import { PrivacyPolicyComponent } from './components/docs/privacy-policy/privacy-policy.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent }, 
  { path: 'change-pass', component: ChangePasswordComponent },
  { path: 'change-pass-code', component: ChangePasswordCodeComponent },
  { path: 'change-pass-email', component: ChangePasswordEmailComponent },
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'login', component: LoginComponent },
  { path: 'verify-email', component: VerifyEmailComponent },
  { path: 'home-user-type-1', component: HomeUserType1Component },
  { path: 'home-user-type-2', component: HomeUserType2Component },
  { path: 'type-user', component: TypeUserComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
