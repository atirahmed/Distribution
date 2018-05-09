import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clientRef: AngularFireList<any>;
  Client: Observable<any[]>;

  constructor(db: AngularFireDatabase) {
    this.clientRef = db.list('PharmaCompany');
    // Use snapshotChanges().map() to store the key
    this.Client = this.clientRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  ngOnInit() {
  }

}
