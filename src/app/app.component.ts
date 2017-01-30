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
    apiKey: "yourkey",
    authDomain: "firebase domain",
    databaseURL: "your db url",
    storageBucket: "your storage bucket",
    messagingSenderId: "your sender id"
  };
  initializeApp(config);
  
  var root = database().ref('messages');
  root.on('value', function(snap) {
    console.log(snap.val());
  });
  
  }
  
}
