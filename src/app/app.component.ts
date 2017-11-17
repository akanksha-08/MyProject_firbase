import { Component, OnInit} from '@angular/core';
import { AuthService } from './auth.service'; 
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'Firebase Login';
  /*timestamp: string;
  messages: FirebaseListObservable<any[]>;
 
  constructor(public authService: AuthService, public db: AngularFireDatabase) {}

   ngOnInit() {
      this.getChatData();
  }
   getChatData(){
        this.messages = this.db.list('chat_messages');
   }
  newMessage(message) {
   var msg = {
        msg: message,
        timestamp: Date.now(),
        displayEmail: this.displayEmail,
        //displayName: this.displayName
   };
    this.messages.push(message);
  }*/
}

