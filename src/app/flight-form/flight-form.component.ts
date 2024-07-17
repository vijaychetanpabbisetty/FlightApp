import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../api.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-flight-form',
  templateUrl: './flight-form.component.html',
  styleUrls: ['./flight-form.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})

export class FlightFormComponent {
  constructor(private apiService: ApiService) { }
  isLoading: boolean = false;

  formData = {
    airline: '',
    arrivalDate: '',
    arrivalTime: '',
    flightNumber: '',
    numOfGuests: 0,
    comments: ''
  };

  apiData: any = null;

  onSubmit(): void {
    this.isLoading = true;
    this.apiService.submitForm(this.formData).then(data => {
      this.apiData = data;
      swal.fire("Good job!", "Your Flight Ticket is confirmed with us", "success");
      console.log('API Data:', this.apiData);
    }).catch((err) => {
      swal.fire("Uuuoohh...!!", "Something went wrong, Please check the data", "warning");
    }).finally(() => {
      this.isLoading = false;
    });

  }
}
