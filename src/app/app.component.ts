import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthScreenComponent } from "./auth-screen/auth-screen.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AuthScreenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'flight-checker-app';
}
