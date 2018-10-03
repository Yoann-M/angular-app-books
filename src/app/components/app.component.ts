import { Component } from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    var config = {
      apiKey: "AIzaSyD8Woa56xpst3OD3n6lG9qrqpSac7qm2ao",
      authDomain: "http-client-demo-399e9.firebaseapp.com",
      databaseURL: "https://http-client-demo-399e9.firebaseio.com",
      projectId: "http-client-demo-399e9",
      storageBucket: "http-client-demo-399e9.appspot.com",
      messagingSenderId: "874245883625"
    };
    firebase.initializeApp(config);
  }
}
