import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  contactForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      inquiryTitle: ['', Validators.required],
      inquiryType: ['', Validators.required],
      budget: [''],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      // Make a POST request to the backend server
      const url = 'http://localhost:4200/';
      // Set headers for the POST request
      const headers = new HttpHeaders({
      'Content-Type': 'application/json', // Set the content type to JSON
      'Accept': 'application/json' // Set the response type to JSON
      });
      this.http.post(url, this.contactForm.value).subscribe(
        (response) => {
          console.log('Contact data submitted successfully:', response);
          // Handle successful submission, e.g., show a success message
        },
        (error) => {
          console.error('Error submitting contact data:', error);
          // Handle error, e.g., show an error message
        }
      );
    }
  }
}