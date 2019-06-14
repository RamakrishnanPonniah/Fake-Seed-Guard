import { MediaMatcher } from "@angular/cdk/layout";
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { ConversationService } from "../conversation.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit, OnDestroy {
  loginError;
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
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

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngOnInit() {}

  login(form: NgForm) {
    if (form.value.uname == "user" && form.value.psw == "isg") {
      sessionStorage.setItem("loggedIn", "true");
      this.router.navigate(["/home"]);
      this.conversation.setloggedInStatus(true);
    } else {
      this.loginError = true;
    }
  }
}
