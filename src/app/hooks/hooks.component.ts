import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hooks',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './hooks.component.html',
  styleUrl: './hooks.component.css'
})
export class HooksComponent implements OnInit,OnChanges,DoCheck,AfterContentChecked,AfterContentInit,AfterViewChecked,AfterViewInit,OnDestroy {

  @Input() data:string =""

  anti: string = ""
  constructor(){
    console.log("Contructor is Called")
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }
  ngOnInit(): void {
    console.log("ngOnInit is Called")
  }
  ngDoCheck(): void {
    console.log("ngDoCheck is Called")
  }
  ngAfterContentChecked(): void {
    console.log("ngacchecked is called");
    
  }
  ngAfterContentInit(): void {
    console.log("ngacinit is called")
  }
  ngAfterViewChecked(): void {
    console.log("view checked");
  }
  ngAfterViewInit(): void {
    console.log("view init");
  }
  ngOnDestroy(): void {
    console.log("hello destroyed");
    
  }
}
