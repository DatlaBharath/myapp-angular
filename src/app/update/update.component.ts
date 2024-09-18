import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {
  prodobj: Product = new Product("","","",0,0);
  constructor(private productService: ProductService){}
  onSubmit(){
    console.log(this.prodobj);
    this.productService.updateProduct(this.prodobj).subscribe((data)=> console.log(data))
    // this.productService.saveProduct(this.prodobj).subscribe({error: (e) => console.error(e),next: (data)=> console.log(data)})
  }
}
