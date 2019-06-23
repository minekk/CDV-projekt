import { Component } from '@angular/core';
import { ContactFormService } from '../contact/contact-form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sent',
  templateUrl: './sent.component.html',
  styleUrls: ['./sent.component.scss']
})
export class SentComponent{

  name: string = "";
  yourMessage: string = "";
  contact: string = "";
  contactFormService:ContactFormService;
  router: Router = null;


  constructor(router:Router, contactFormService:ContactFormService)  {
    this.name=contactFormService.name;
    this.yourMessage=contactFormService.yourMessage;
    this.contact=contactFormService.contact;

    this.contactFormService=contactFormService;
    this.router=router;

    setTimeout(() =>{
      this.name='';
      this.yourMessage='';
      this.contact='';
      this.router.navigate(['/contact']); }, 2000);
      //this.router.navigate(['/sent']);
  }

  back() {

    // setTimeout(function(){
       this.name='';
       this.yourMessage='';
       this.contact='';
      this.router.navigate(['/contact']);
  
    }

}
