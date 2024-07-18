import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://us-central1-crm-sdk.cloudfunctions.net/flightInfoChallenge';

  constructor() {}

  submitForm(payload: any) {
    const headers = {
      'token': 'WW91IG11c3QgYmUgdGhlIGN1cmlvdXMgdHlwZS4gIEJyaW5nIHRoaXMgdXAgYXQgdGhlIGludGVydmlldyBmb3IgYm9udXMgcG9pbnRzICEh',
      'candidate': 'Vijaychetan Pabbisetty',
      'Content-Type': 'application/json'
    };

    return axios.post(this.apiUrl, payload, { headers })
      .then(response => response.data)
      .catch(error => {
        console.error('There was an error making the API call!', error);
        throw error;
      });
  }
}
