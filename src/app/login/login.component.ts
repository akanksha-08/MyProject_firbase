import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'; 
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  displayEmail: string;
  displayName: string;

  resetPassword = false;


  constructor(public authService: AuthService, public db: AngularFireDatabase) {}

  ngOnInit() {
  }
  signup() {
    this.authService.signup(this.email,this.displayName,this.password,);
    this.email = this.displayName = this.password = '';
  }

  login() {
    this.authService.login(this.email, this.password);
    this.displayEmail = this.email;
    this.email = this.password = '';   
     
  }
isValidMailFormat(email: string) {
    const EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
 
    if ((email.length === 0) && (!EMAIL_REGEXP.test(email))) {
      return false;
    }
 
    return true;
  }
 
  sendResetEmail() {
    console.log("reset mail send............");
    this.authService.resetPassword(this.email)
      .then(() => this.resetPassword = true)
      .catch(error => {
        console.log (error)
      })
      console.log("reset mail send.@@@@@@@@@@@@...........");
  }

  logout() {
    this.authService.logout();
  }

}
