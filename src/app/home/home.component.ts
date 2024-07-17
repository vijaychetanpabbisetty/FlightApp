import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { account } from '../../lib/appwrite';
import { Router } from '@angular/router';
import { FlightFormComponent } from "../flight-form/flight-form.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [CommonModule, FlightFormComponent]
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
    try {
      this.loggedInUser = await account.get();
    } catch (error) {
      this.router.navigate(['/']);
    }
  }

  async logout() {
    try {
      await account.deleteSessions();
      this.loggedInUser = null;
    } catch (error) {
      console.log("Error while logging out, ", error)
    }
    this.router.navigate(['/']);
  }
}