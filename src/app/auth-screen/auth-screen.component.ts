import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { account, ID } from '../../lib/appwrite';
import { OAuthProvider } from 'appwrite';

@Component({
  selector: 'app-auth-screen',
  templateUrl: './auth-screen.component.html',
  styleUrls: ['./auth-screen.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})

export class AuthScreenComponent {
  loggedInUser: any = null;
  email: string = '';
  password: string = '';
  name: string = '';

  async login(email: string, password: string) {
    await account.createEmailPasswordSession(email, password);
    this.loggedInUser = await account.get();
  }

  async register(email: string, password: string, name: string) {
    await account.create(ID.unique(), email, password, name);
    this.login(email, password);
  }

  async logout() {
    await account.deleteSession('current');
    this.loggedInUser = null;
  }

  async signin() {
    account.createOAuth2Session(
      OAuthProvider.Google, // provider
      'http://localhost:4200/home', // redirect here on success
      'http://localhost:4200/failed', // redirect here on failure
    );
  }
}
