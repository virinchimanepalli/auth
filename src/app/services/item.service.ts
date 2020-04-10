import { Injectable } from '@angular/core';
import {AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument}
from '@angular/fire/firestore'
import {Item} from '../models/Item';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map'
import 'rxjs/Rx';
import { ItemsComponent } from '../second/items/items.component';
import { auth } from 'firebase/app';

 @Injectable({
  providedIn: 'root'
})
export class ItemService {
  itemsCollection: AngularFirestoreCollection<Item>
  items: Observable<Item[]>;
  itemDoc:AngularFirestoreDocument<Item>;

  constructor(public afs: AngularFirestore) {
    
    this.itemsCollection = this.afs.collection('items', ref => ref.orderBy('title','asc'))
// itemsCollection is the obj for collection() using Angularfirestorecollection
// for snapshot also like above statement 


    this.items = this.itemsCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Item;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

   getItem(){
     return this.items;
   }
   addItem(item: Item){
     this.itemsCollection.add(item);
  }
  deleteItem(item:Item){
    this.itemDoc = this.afs.doc(`items/${item.id}`);
    this.itemDoc.delete()
  }
  updateItem(item: Item){
    const id = item.id;
    delete item.id;
    delete item.editState;
  
    this.itemsCollection.doc( id).update(item);
    // delete
 }

}

