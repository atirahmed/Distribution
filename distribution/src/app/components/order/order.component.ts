import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  OrderRef: AngularFireList<any>;
  Order: Observable<any[]>;

  constructor(db: AngularFireDatabase) {
    this.OrderRef = db.list('Order');
    // Use snapshotChanges().map() to store the key
    this.Order = this.OrderRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  ngOnInit() {
  }

}
