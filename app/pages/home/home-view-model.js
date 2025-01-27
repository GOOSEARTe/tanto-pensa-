import { Observable } from '@nativescript/core';

export class HomeViewModel extends Observable {
  constructor() {
    super();
    
    this.initialize();
  }

  initialize() {
    this.set('title', 'Welcome to NativeScript!');
    this.set('message', 'Tap the button to see what happens.');
  }

  updateMessage(newMessage) {
    this.set('message', newMessage);
  }
}