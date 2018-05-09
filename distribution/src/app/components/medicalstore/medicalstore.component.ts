import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-medicalstore',
  templateUrl: './medicalstore.component.html',
  styleUrls: ['./medicalstore.component.css']
})
export class MedicalstoreComponent implements OnInit {

  MedStoreRef: AngularFireList<any>;
  MedStore: Observable<any[]>;

  constructor(db: AngularFireDatabase) {
    this.MedStoreRef = db.list('MedicalStores');
    // Use snapshotChanges().map() to store the key
    this.MedStore = this.MedStoreRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });

    // this.MedStore.forEach(
    //   (meds)=>{
    //     meds.forEach(
    //       (m)=>{
    //         console.log(m.key);
    //       }
    //     )
    //   }
    // );
  }

  ngOnInit() {
  }

}

