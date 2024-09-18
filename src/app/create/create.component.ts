import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Product } from '../product';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule,HttpClientModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  prodobj: Product = new Product("","","",0,0);
  constructor(private productService: ProductService){}
  onSubmit(){
    console.log(this.prodobj);
    this.productService.saveProduct(this.prodobj).subscribe((data)=> console.log(data))
    // this.productService.saveProduct(this.prodobj).subscribe({error: (e) => console.error(e),next: (data)=> console.log(data)})
  }
}
