import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondRoutingModule } from './second-routing.module';
import { SecondComponent } from './second.component';
import { ItemsComponent } from './items/items.component';
import { AddItemComponent } from './add-item/add-item.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ItemService } from '../services/item.service';
import { AngularFirestore } from '@angular/fire/firestore/firestore';


@NgModule({
  declarations: [SecondComponent,NavbarComponent,
    ItemsComponent,
    AddItemComponent],
  imports: [
    CommonModule,
    SecondRoutingModule
  ]
,
  providers:[ItemService,AngularFirestore]
})
export class SecondModule { }
