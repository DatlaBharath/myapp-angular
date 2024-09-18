import { CommonModule } from '@angular/common';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent{
  skillList = [{name:"Javascript",img:"https://cdn-icons-png.flaticon.com/512/1199/1199124.png"},{name:"CSS",img:"https://cdn-icons-png.flaticon.com/512/919/919826.png"},{name:"TailwindCSS",img:"https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/tailwind-css-icon.png"},{name:"CSS",img:"https://cdn-icons-png.flaticon.com/512/476/476863.png"},{name:"HTML",img:"https://cdn-icons-png.flaticon.com/512/14946/14946653.png"},{name:"TypeScript",img:"https://cdn-icons-png.flaticon.com/512/2065/2065157.png"},{name:"Javascript",img:"https://cdn-icons-png.flaticon.com/512/609/609803.png"},{name:"CSS",img:"https://cdn-icons-png.flaticon.com/512/476/476863.png"},{name:"HTML",img:"https://cdn-icons-png.flaticon.com/512/14946/14946653.png"},{name:"TypeScript",img:"https://cdn-icons-png.flaticon.com/512/2065/2065157.png"},{name:"Javascript",img:"https://cdn-icons-png.flaticon.com/512/609/609803.png"},{name:"CSS",img:"https://cdn-icons-png.flaticon.com/512/476/476863.png"},{name:"HTML",img:"https://cdn-icons-png.flaticon.com/512/14946/14946653.png"},{name:"TypeScript",img:"https://cdn-icons-png.flaticon.com/512/2065/2065157.png"},{name:"Javascript",img:"https://cdn-icons-png.flaticon.com/512/609/609803.png"},{name:"CSS",img:"https://cdn-icons-png.flaticon.com/512/476/476863.png"},{name:"HTML",img:"https://cdn-icons-png.flaticon.com/512/14946/14946653.png"},{name:"TypeScript",img:"https://cdn-icons-png.flaticon.com/512/2065/2065157.png"}]
}

