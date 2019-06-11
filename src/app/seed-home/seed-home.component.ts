import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-seed-home',
  templateUrl: './seed-home.component.html',
  styleUrls: ['./seed-home.component.css']
})
export class SeedHomeComponent implements OnInit {

  @ViewChild('slideContainer') container:ElementRef;
  slideIndex = 0;
  constructor() { }

  ngOnInit() {
    this.slideCarousel();
  }
   
  slideCarousel(){
    let i;
    for (i = 0; i < this.container.nativeElement.childElementCount; i++) {
      this.container.nativeElement.children[i].style.display = "none";  
    }
    this.slideIndex++;
    if (this.slideIndex > this.container.nativeElement.childElementCount) {this.slideIndex = 1}    
  
    this.container.nativeElement.children[this.slideIndex-1].style.display = "block"; 
    setTimeout(()=> this.slideCarousel(),3000);
  }
}
