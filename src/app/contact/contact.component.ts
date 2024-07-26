import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  name: string = '';
  mail: string = '';
  message: string = '';
  recipientEmail: string = 'naveenvemula2487@gmail.com';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const formData = {
      name: this.name,
      mail: this.mail,
      message: this.message,
      recipientEmail: this.recipientEmail
    };

    this.http.post('https://your-email-api-endpoint', formData).subscribe(response => {
      console.log('Email sent successfully', response);
    }, error => {
      console.error('Error sending email', error);
    });
  }

}
