import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { account } from '../../lib/appwrite';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  loggedInUser: any = null;
  email: string = '';
  password: string = '';
  name: string = '';

  ngOnInit(): void {
    this.onPageLoad();
  }

  async onPageLoad(): Promise<void> {
    console.log('Home page loaded');
    this.loggedInUser = await account.get();
    console.log(this.loggedInUser);
  }

  async logout() {
    try {
      await account.deleteSessions();
      this.loggedInUser = null;
    } catch (error) {
      
    }
    this.router.navigate(['/']);
  }
}