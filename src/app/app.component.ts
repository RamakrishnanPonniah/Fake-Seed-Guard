import { MediaMatcher } from "@angular/cdk/layout";
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ConversationService } from "./conversation.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit, OnDestroy {
  title = "seeder";
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  isUserLoggedIn = sessionStorage.getItem("loggedIn") ? true : false;
  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private router: Router,
    private conversation: ConversationService
  ) {
    this.mobileQuery = media.matchMedia("(max-width: 600px)");
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.conversation
      .getloggedInStatus()
      .subscribe(isLoggedIn => (this.isUserLoggedIn = isLoggedIn));
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  tabs: any[] = [
    {
      title: "ABOUT",
      route: "./home"
    },
    {
      title: "VERIFY SEED",
      responsive: true,
      route: ["./launch"]
    },
    {
      title: "RECENT ACTIVITY",
      responsive: true,
      route: ["./activity"]
    }
  ];

  logOut() {
    sessionStorage.setItem("loggedIn", "");
    this.conversation.setloggedInStatus(false);
    this.router.navigate(["/login"]);
  }

  routeChange(url) {
    let routeData = "";
    if (url.tabTitle == "ABOUT") {
      routeData = "/home";
    } else if (url.tabTitle == "VERIFY SEED") {
      routeData = "/launch";
    } else if (url.tabTitle == "RECENT ACTIVITY") {
      routeData = "/activity";
    }
    this.router.navigateByUrl(routeData);
  }
}
