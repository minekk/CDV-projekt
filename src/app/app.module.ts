import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule} from '@angular/material/menu';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AgmCoreModule } from '@agm/core';
import { DragScrollModule } from 'ngx-drag-scroll';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { WorksComponent } from './works/works.component';
import { WeatherComponent } from './works/weather/weather.component';
import { CurrentComponent } from './works/weather/current/current.component';
import { FormComponent } from './works/weather/form/form.component';
import { SentComponent } from './sent/sent.component';

import { WeatherService } from './works/weather/weather.service';
import { ForecastComponent } from './works/weather/forecast/forecast.component';
import { ForecastService } from './works/weather/forecast.service';
import { ContactFormService } from './contact/contact-form.service';
import { AddZeroPipe } from './works/weather/add-zero.pipe';
import { GetDayOfWeekPipe } from './works/weather/get-day-of-week.pipe';
import { KelwinToCPipe } from './works/weather/kelwin-to-c.pipe';



const routes: Routes = [
  {path: '', component: AboutComponent},
  {path: 'about', component: AboutComponent},
  {path: 'works', component: WorksComponent, children: [
     
      {path: 'weather', component: WeatherComponent}
      ]},
  {path: 'contact', component: ContactComponent},
  {path: 'sent', component: SentComponent},
  {path: '**', redirectTo: ''}

]

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, AboutComponent, WorksComponent, ContactComponent, WeatherComponent, FormComponent, CurrentComponent, ForecastComponent, AddZeroPipe, GetDayOfWeekPipe, KelwinToCPipe,SentComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule,RouterModule.forRoot(routes), HttpClientModule, BrowserAnimationsModule, MatButtonModule, MatCheckboxModule,MatIconModule,
    MatInputModule, MatMenuModule, MDBBootstrapModule, AgmCoreModule.forRoot({apiKey: 'AIzaSyCKtnJqwHe5LQlyQvx7agGVf3aUWsFxg5c'}), DragScrollModule, MatProgressSpinnerModule
  ],
  providers: [WeatherService, ForecastService, ContactFormService],
  bootstrap: [AppComponent,HeaderComponent]
})
export class AppModule { }
