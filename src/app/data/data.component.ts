import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { throwIfEmpty } from 'rxjs';
import { DataService } from '../data.service';
import { Product } from '../product';

@Component({
  selector: 'app-data',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './data.component.html',
  styleUrl: './data.component.css'
})
export class DataComponent {
  showMilk = false
  showTata = false
  showKerala = false
  showMagi = false
  brand = ""
  price=0
  prod = ""
  viewMilk(){
    if (this.showMilk) {
      this.showMilk = false
    } else {
      this.showMilk = true
    }
  }
  viewTata(){
    if (this.showTata) {
      this.showTata = false
    } else {
      this.showTata = true
    }
  }
  viewKerala(){
    if (this.showKerala) {
      this.showKerala = false
    } else {
      this.showKerala = true
    }
  }
  viewMagi(){
    if (this.showMagi) {
      this.showMagi = false
    } else {
      this.showMagi = true
    }
  }
  search = "";
  prodobj : Product = new Product("","","",0,0)
  productData : Product[]=[]
  constructor(private service:DataService){
    this.productData = service.products
  }
  count!:number;
  counted(){
    return this.productData.filter((ele)=>ele.brand.slice(0,this.brand.length)==this.brand)
    .filter((ele)=>ele.description.slice(0,this.prod.length)==this.prod)
    .filter((ele)=>ele.price> this.price)
  }
  onSubmit(){
    console.log(this.prodobj)
    this.productData.push(new Product(this.prodobj.productId,this.prodobj.brand,this.prodobj.description,this.prodobj.qty,this.prodobj.price));
    this.counted()
    // this.productData.push(this.prodobj);
  }
}
