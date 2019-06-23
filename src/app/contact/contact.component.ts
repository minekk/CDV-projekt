import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import  {ContactFormService}  from './contact-form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent{

  contactFormService:ContactFormService;
  //message: any;
  router: Router = null;

  name:string ="";
  yourMessage:string ="";
  contact:string = "";
  warn: string='';

  email = new FormControl('', [Validators.required, Validators.email]);

   constructor(router: Router, contactFormService:ContactFormService) {
    this.router = router;
    this.contactFormService = contactFormService;
  }


  getErrorMessage() {
    return this.email.hasError('required') ? 'Musisz podac numer kontaktowy albo email!' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  send (name,yourMessage,contact) {
    name=this.name.trim();
    yourMessage=this.yourMessage.trim();
    contact=this.contact.trim();
    if (contact==='' || name==='' || yourMessage==='') {
      this.warn='Wszystkie pola muszą być wypełnione!';
    }
    else {

      this.contactFormService.name=this.name;
      this.contactFormService.yourMessage=this.yourMessage;
      this.contactFormService.contact=this.contact;
      this.router.navigate(['/sent']);
    }

  }
}