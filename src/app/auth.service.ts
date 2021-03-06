import { Injectable } from '@angular/core';
//import {Router} from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { User } from './models/user.models';
import { Router} from '@angular/router';


@Injectable()
export class AuthService {
	private user: Observable<firebase.User>;
  private authState: any;

  constructor(private firebaseAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private router: Router) {
    this.user = firebaseAuth.authState;
  }

authUser() {
    return this.user;
  }
  get currentUserId(): string{
    return this.authState !== null ? this.authState.uid: '';
  }
signup(email: string, displayName: string, password: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        console.log('Success!');
        this.authState = user;
        this.setUserData(email,displayName);

      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });    
  }

// set userdata
setUserData(email: string, displayName: string): void {
    const path = `users/${this.currentUserId}`;
    const data = {
      email: email,
      displayName: displayName
    };

    this.db.object(path).update(data)
      .catch(error => console.log(error));
  }
  
  login(email: string, password: string) {
    this.firebaseAuth.auth.signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!');
         this.router.navigate(['./home.component.html']);
         console.log("redirected to home page/..........");
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });
  }

// RESET password
resetPassword(email : string){
  return this. firebaseAuth.auth.sendPasswordResetEmail
(email).then(() => console.log('sent password reset email')).catch((error) => console.log(error))
}
  logout() {
    this.firebaseAuth.auth.signOut();
  }
}
