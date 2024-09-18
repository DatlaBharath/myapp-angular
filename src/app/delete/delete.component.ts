import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent {
  id:number=0
  constructor(private productSevice:ProductService){}
  onClick(){
    this.productSevice.deleteProduct(this.id).subscribe((data)=> {console.log(data);console.log("Deleted Successfully")})
  }
}