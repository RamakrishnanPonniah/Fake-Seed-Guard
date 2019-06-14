import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ConversationService } from '../conversation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginError;
  constructor(private router:Router, private conversation:ConversationService) { }

  ngOnInit() {
  }

  login(form:NgForm){
    if(form.value.uname=='user' && form.value.psw =='isg'){
      sessionStorage.setItem('loggedIn', 'true');
      this.router.navigate(['/home']);
      this.conversation.setloggedInStatus(true);
    }
    else{
      this.loginError = true;
    }
  }

}
