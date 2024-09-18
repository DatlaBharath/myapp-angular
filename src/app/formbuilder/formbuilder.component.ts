import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formbuilder',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './formbuilder.component.html',
  styleUrl: './formbuilder.component.css'
})
export class FormbuilderComponent {
  productForm:FormGroup;
  constructor(private formBuilder:FormBuilder){
    this.productForm = this.formBuilder.group({
      productId: [,[Validators.required,Validators.minLength(5)]],
      brand: ['',[Validators.required,Validators.minLength(3)]],
      description : this.formBuilder.group({
        age: [0],
        seasons: [''],
      }),
      qty: [0,[Validators.required,Validators.min(5)]],
      price: [0,[Validators.required,Validators.min(5)]],
      suppliers : this.formBuilder.array([
        this.formBuilder.control('')
      ])
    });
  }
  addNewSupplier(){
    console.warn(this.suppliers)
    this.suppliers.push(this.formBuilder.control(''))
  }
  get suppliers(){
    return this.productForm.get('suppliers') as FormArray;
  }
  onSubmit(){
    console.error(this.productForm)
    console.error(this.productForm.value)
    console.warn(this.productForm.controls['productId'])
    console.error(this.productForm.controls["description"]?.get('seasons'))
    console.error(this.productForm.controls["description"])
    console.warn(this.productForm.controls["suppliers"].get((0).toString()))
    if(this.productForm.valid){
      console.log("form Submmited")
    }else{
      console.log("failed to submit")
    }
  }
}
