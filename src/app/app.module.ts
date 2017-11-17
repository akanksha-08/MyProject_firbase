import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import{ HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment.prod';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AuthService } from './auth.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { SettingComponent } from './setting/setting.component';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { ProfileComponent } from './profile/profile.component';
import{RouterModule, Routes} from '@angular/router';

import { appRoutes } from '../routes';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AboutComponent,
    SettingComponent,
    ChatboxComponent,
    ProfileComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    HttpModule,
   /* RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/app'

      },
      {path:'home',component:HomeComponent},
      {path:'login',component:LoginComponent},
      {path:'about',component:AboutComponent},
      {path:'profile',component:ProfileComponent},
      {path:'chatbox',component:ChatboxComponent},
      {path:'setting',component:SettingComponent}      
    ])
    */
    RouterModule.forRoot(appRoutes)
    

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
