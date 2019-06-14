import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { NgbCarouselConfig } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-seed-home",
  templateUrl: "./seed-home.component.html",
  styleUrls: ["./seed-home.component.css"]
})
export class SeedHomeComponent implements OnInit {
  @ViewChild("slideContainer") container: ElementRef;
  slideIndex = 0;
  constructor(config: NgbCarouselConfig) {
    config.interval = 1000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = true;
    config.showNavigationArrows = false;
  }

  ngOnInit() {
    //this.slideCarousel();
  }

  slideCarousel() {
    let i;
    for (i = 0; i < this.container.nativeElement.childElementCount; i++) {
      this.container.nativeElement.children[i].style.display = "none";
    }
    this.slideIndex++;
    if (this.slideIndex > this.container.nativeElement.childElementCount) {
      this.slideIndex = 1;
    }

    this.container.nativeElement.children[this.slideIndex - 1].style.display =
      "block";
    setTimeout(() => this.slideCarousel(), 2800);
  }
}
