import { Component } from '@angular/core';
import { FormControl, FormGroup,FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css'
})

export class ReactiveComponent {
  productForm = new FormGroup(
    {
      productId: new FormControl('',[Validators.required,Validators.minLength(5)]),
      brand: new FormControl('',[Validators.required,Validators.minLength(3)]),
      description: new FormControl('',[Validators.required,Validators.minLength(5)]),
      qty: new FormControl(0,[Validators.required,Validators.min(5)]),
      price: new FormControl(0,[Validators.required,Validators.min(5)])
    }
  )
  onSubmit(){
    console.error(this.productForm)
    console.warn(this.productForm.value)
    console.log(this.productForm.controls['price'].valid)
  }
}
