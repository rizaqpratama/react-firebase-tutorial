import app from "firebase/app";
import "firebase/auth";

export const config = {
  apiKey: "AIzaSyCKNgn_2l9c5YlEyjMqRNV0hofGsqQ0rJY",
  authDomain: "reac-firebase-f44a2.firebaseapp.com",
  databaseURL: "https://reac-firebase-f44a2.firebaseio.com",
  projectId: "reac-firebase-f44a2",
  storageBucket: "reac-firebase-f44a2.appspot.com",
  messagingSenderId: "699743254093"
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
  }

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
}

export default Firebase;
