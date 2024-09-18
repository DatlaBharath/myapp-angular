import { Injectable } from '@angular/core';
import { Product } from './product';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  products : Product[]=[];

  constructor() { 
    this.products[0] = new Product("20331A0544","tata","salt packet",5,20);
    this.products[1] = new Product("20331A0545","tata","consaltency service",2,110);
    this.products[2] = new Product("20331A0546","tata","motors",12,2220000);
    this.products[3] = new Product("20331A0547","magi","masala",3,15);
    this.products[4] = new Product("20331A0548","magi","soup",6,60);
    this.products[5] = new Product("20331A0549","magi","noodles",4,55);
    this.products[6] = new Product("20331A0546","diarymilk","silk",2,100);
    this.products[7] = new Product("20331A0547","diarymilk","nuts",3,140);
    this.products[8] = new Product("20331A0544","diarymilk","shots",5,50);
    this.products[9] = new Product("20331A0545","kerala","apple",2,140);
    this.products[10] = new Product("20331A0550","tata","tea",10,150);
    this.products[11] = new Product("20331A0551","tata","coffee",8,200);
    this.products[12] = new Product("20331A0552","magi","pasta",5,70);
    this.products[13] = new Product("20331A0553","magi","sauce",7,45);
    this.products[14] = new Product("20331A0554","diarymilk","fruit & nut",4,160);
    this.products[15] = new Product("20331A0555","diarymilk","oreo",3,120);
    this.products[16] = new Product("20331A0556","kerala","banana",6,30);
    this.products[17] = new Product("20331A0557","kerala","mango",5,80);
  }
}
