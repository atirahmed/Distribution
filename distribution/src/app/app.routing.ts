
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

 import {LoginComponent } from './components/login/login.component';
 import {SignupComponent } from './components/signup/signup.component';
 import {DoctorComponent } from './components/doctor/doctor.component';
 import { ClientsComponent } from './components/clients/clients.component';
 import { OrderComponent } from './components/order/order.component';
 import { MedicineComponent } from './components/medicine/medicine.component';
import { LandingComponent } from './components/landing/landing.component';
import {MedicalstoreComponent} from './components/medicalstore/medicalstore.component';

const routes : Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full'  },
     { path:'home', component:LandingComponent},
     { path:'login', component:LoginComponent},
     { path:'signup', component:SignupComponent},
     { path:'doctor', component:DoctorComponent},
     { path:'clients', component:ClientsComponent},
     { path:'order', component:OrderComponent},
     { path:'medicine', component:MedicineComponent},
     {path: 'medicalstore', component:MedicalstoreComponent}
//     { path: '**', component: PageNotFoundComponent }
 
]

export const AppRouter = RouterModule.forRoot(routes) ;
// export class AppRouter{ }