import { Routes } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { LoginComponent } from './app/login/login.component';
import { AboutComponent } from './app/about/about.component';
import { SettingComponent } from './app/setting/setting.component';
import { ChatboxComponent } from './app/chatbox/chatbox.component';
import { ProfileComponent } from './app/profile/profile.component';
import { AppComponent } from './app/app.component';

export const appRoutes: Routes = [
      {path:'home',component:HomeComponent},
      {path:'login',component:LoginComponent},
      {path:'about',component:AboutComponent},
      {path:'profile',component:ProfileComponent},
      {path:'chatbox',component:ChatboxComponent},
      {path:'setting',component:SettingComponent},
      { path: 'app', component: AppComponent },
      { path: '', redirectTo: '/app', pathMatch: 'full' },
];