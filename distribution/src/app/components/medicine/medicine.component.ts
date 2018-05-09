import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent implements OnInit {

    MedicineRef: AngularFireList<any>;
    Medicine: Observable<any[]>;

    clientRef: AngularFireList<any>;
    Client: Observable<any[]>;
    name : any;
    form: FormGroup;
    
    constructor(db: AngularFireDatabase) {
      this.MedicineRef = db.list('Medicines');
      // Use snapshotChanges().map() to store the key
      this.Medicine = this.MedicineRef.snapshotChanges().map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      });

        this.clientRef = db.list('PharmaCompany');
        // Use snapshotChanges().map() to store the key
          this.Client = this.clientRef.snapshotChanges().map(changes => {
          return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        });
      }
    

      // createForm() {
      //   this.form = this.db.group({
      //     name: ['', Validators.required],
      //     email: ['', Validators.required],
      //     message: ['', Validators.required],
      //   });

        


      // AddMedicine() {
      //   const newMed: any = {
      //     companyName: this.name,
      //     medicineName: this.name,
      //     price: this.price,
      //   };
      //   const MedicineRef = this.db.list(this.path);
      //   itemRef.push(newSchedule);
      // }
      

    ngOnInit() {
    }
  
  }
  
  