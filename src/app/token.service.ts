import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})


export class TokenService {

  credentials = {
    username: "foo",
    password: "foo"
  }

  constructor(private http:HttpClient) { }
  authenticate(): Observable<any>{
    let url = "http://localhost:2097/authenticate";
    return this.http.post(url,this.credentials)
  }

  greet(header:HttpHeaders): Observable<any>{
    let url = "http://localhost:2097/greet";
    return this.http.get(url,{ headers: header , responseType : 'text'  as 'json'});
  }
  posts():Observable<any>{
    let url = "https://jsonplaceholder.typicode.com/posts"
    return this.http.get(url)
  }
}
