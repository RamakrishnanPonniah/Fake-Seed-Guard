import { MediaMatcher } from "@angular/cdk/layout";
import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  ElementRef,
  ViewChild
} from "@angular/core";
import { NgbCarouselConfig } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-seed-home",
  templateUrl: "./seed-home.component.html",
  styleUrls: ["./seed-home.component.css"]
})
export class SeedHomeComponent implements OnInit, OnDestroy {
  @ViewChild("carousel") container: ElementRef;
  slideIndex = 0;
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  constructor(
    config: NgbCarouselConfig,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher
  ) {
    config.interval = 2000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = true;
    config.showNavigationArrows = false;
    this.mobileQuery = media.matchMedia("(max-width: 600px)");
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngOnInit() {
    //this.slideCarousel();
  }
}
