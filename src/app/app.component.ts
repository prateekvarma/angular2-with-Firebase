import { Component } from '@angular/core';
import { initializeApp, database } from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  
  constructor() {
      // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCnXVQq2E4lMGz9-xK1aggcA_MZwUGwGXU",
    authDomain: "scorching-fire-5416.firebaseapp.com",
    databaseURL: "https://scorching-fire-5416.firebaseio.com",
    storageBucket: "scorching-fire-5416.appspot.com",
    messagingSenderId: "558764680726"
  };
  initializeApp(config);
  
  var root = database().ref('messages');
  root.on('value', function(snap) {
    console.log(snap.val());
  });
  
  }
  
}
