import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Posts } from '../Posts';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-token',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './token.component.html',
  styleUrl: './token.component.css'
})
export class TokenComponent {
  constructor(private tokenService:TokenService){}

  header!:HttpHeaders;
  posts!:Posts[];


  getToken(){
    this.tokenService.authenticate().subscribe(data => {
      console.log(data.jwt)
      let a:string = "Bearer "+data.jwt
      console.log(a)
      this.header = new HttpHeaders().set("Authorization",a)
    })
  }
  getGreet(){
    this.tokenService.greet(this.header).subscribe(data => console.log(data))
  }

  getPosts(){
    this.tokenService.posts().subscribe(data => this.posts = data )
  }

}
