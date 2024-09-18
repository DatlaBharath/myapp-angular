import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { QualificationsComponent } from './qualifications/qualifications.component';
import { DataComponent } from './data/data.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { FormbuilderComponent } from './formbuilder/formbuilder.component';
import { CreateComponent } from './create/create.component';
import { RetriveComponent } from './retrive/retrive.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';
import { TokenComponent } from './token/token.component';
import { HooksComponent } from './hooks/hooks.component';
@Component({
  selector: 'my-app-root',
  standalone: true,
  imports: [HooksComponent,DataComponent,RouterOutlet,FormsModule,CommonModule,HeaderComponent,AboutComponent,UpdateComponent,TokenComponent,HomeComponent,SkillsComponent,QualificationsComponent,ReactiveFormsModule,ReactiveComponent,FormbuilderComponent,CreateComponent,RetriveComponent,DeleteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'myapp';
  company = 'UST GLOBAL Trivandrum';
  list = [{"hello":"world","rasen":"gun","power":10000},{"hello":"typescript","rasen":"shuriken","power":5000},{"hello":"html","rasen":"gan","power":500}];
  prodId = "20331A0544";
  desc = "he is inteligent ai model can do good programming";
  avl = true;
  qty = 1000;
  orderqty: number = 0;
  deliveryColor = "bg-red-400";
  printOrder(input: any):void{
    console.log(input + "order is placed")
  }
  orderDate= new Date;
  data:string = ""
  data2:string = ""
  
}

// Angular Life Cycle Hooks - Callback Methods
// Routing
// Karma - Testing
// The Angular Files