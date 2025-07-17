import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { initializeApp } from "firebase/app";

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

const firebaseConfig = {
  apiKey: "AIzaSyBaL7kvDFeXVyCcoP2lqVcAldStuDVPcYA",
  authDomain: "todo-3614f.firebaseapp.com",
  projectId: "todo-3614f",
  storageBucket: "todo-3614f.firebasestorage.app",
  messagingSenderId: "1045827536575",
  appId: "1:1045827536575:web:e4858282e4ca535ac1e80a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
