import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-retrive',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './retrive.component.html',
  styleUrl: './retrive.component.css'
})
export class RetriveComponent {
  products!: Product[];
  constructor(private productService: ProductService){}
  onSubmit(){
    this.productService.getProducts().subscribe((data)=> this.products = data)
    // this.productService.saveProduct(this.prodobj).subscribe({error: (e) => console.error(e),next: (data)=> console.log(data)})
  }
}
