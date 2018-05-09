import { BrowserModule } from '@angular/platform-browser';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';


import { AppComponent } from './app.component';
//firebase configuration
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppRouter } from './app.routing';
import { Router } from '@angular/router';
// import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule} from '@angular/forms';
import {CdkTableModule} from '@angular/cdk/table';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic'; 
import {HttpClientModule} from '@angular/common/http';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatFormFieldModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { ClientsComponent } from './components/clients/clients.component';
import { OrderComponent } from './components/order/order.component';
import { MedicineComponent } from './components/medicine/medicine.component';
import { LandingComponent } from './components/landing/landing.component';
import { MedicalstoreComponent } from './components/medicalstore/medicalstore.component';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    DoctorComponent,
    ClientsComponent,
    OrderComponent,
    MedicineComponent,
    LandingComponent,
    MedicalstoreComponent,
   // AdddoctorComponent,

  
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'distribution'),
    AngularFireDatabaseModule,
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule,
    AppRouter, HttpModule ,FormsModule, MatFormFieldModule,
    BrowserAnimationsModule, MatTableModule,
    HttpModule,MatCardModule, MatButtonModule, MatInputModule, MatSelectModule, MatFormFieldModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatToolbarModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule); 