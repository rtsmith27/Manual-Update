import { Component, OnInit, Input } from '@angular/core';
// import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

  // public newContact: Contact = {
  //   name: '',
  //   email: '',
  //   message: ''
  // };
  
  // private formIsValid(): boolean {
  //   if (this.newContact.name && this.newContact.email && this.newContact.contactText) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  // public onContactSubmit(): void {
  //   console.log("Contact", this.newContact)
  // }

  constructor() { }

  ngOnInit() {
  }

  public pageContent = {
    header: {
      title: 'Contact Manual Update',
      strapline: ''
    },
   
  };

}