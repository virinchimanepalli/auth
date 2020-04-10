import { Component, OnInit } from '@angular/core';
import{ItemService} from '../../services/item.service';
import{Item} from '../../Models/item'

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items : Item[]; //models/item.component.ts
  editstate: boolean;
  itemToEdit: Item;


  constructor(private itemService: ItemService) { }

  ngOnInit() {//used for initialization 
    this.itemService.getItem().subscribe(items =>{
      //console.log(items);
      
      this.items = items;


    })


  }
// for every func we have to use itemservice obj
  deleteItem(item){
  // if (window.confirm(‘Are you sure you want to delete?’)) {
    if(window.confirm('are you sure??')){
      this.itemService.deleteItem(item);}

  }
  editItem(item){
    item.editState =!item.editState;
    console.log('toggle')
  }

  updateItem(item){
    this.itemService.updateItem(item)
    item.editState =!item.editState;
    
  }


}
