import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  mode = false
  change(mode : boolean) {
    if(mode){
      this.mode=false
      this.backgrond="bg-slate-800 text-white"
      this.abg="hover:text-slate-400"
    }else{
      this.mode = true
      this.backgrond="bg-slate-200 text-black"
      this.abg="hover:text-slate-400"
    }
  }
  backgrond="bg-slate-800 text-white"
  abg="hover:text-slate-400"
  navList = [{name:"Home",id:"home",img:"https://cdn-icons-png.flaticon.com/512/609/609803.png"},{name:"About",id:"about",img:"https://cdn-icons-png.flaticon.com/512/476/476863.png"},{name:"Contact",id:"contact",img:"https://cdn-icons-png.flaticon.com/512/14946/14946653.png"},{name:"Links",id:"link",img:"https://cdn-icons-png.flaticon.com/512/2065/2065157.png"}]
}
