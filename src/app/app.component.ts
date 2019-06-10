import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ConversationService} from './conversation.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'seeder';
  isUserLoggedIn = sessionStorage.getItem('loggedIn') ? true:false;
  constructor(private router:Router, private conversation:ConversationService){}

  ngOnInit(){
    this.conversation.getloggedInStatus().subscribe(isLoggedIn => this.isUserLoggedIn = isLoggedIn);
  }

  tabs: any[] = [
    {
      title: 'About',
      icon: 'home',
      route: './home'
    },
    {
      title: 'Verify Seed',
      icon: 'paper-plane-outline',
      responsive: true,
      route: ['./launch']
    },
    {
      title: 'Recent Activity',
      icon: 'flash-outline',
      responsive: true,
      route: ['./activity']
    },
  ];

  logOut(){
    sessionStorage.setItem('loggedIn', '');
    this.conversation.setloggedInStatus(false);
    this.router.navigate(['/login']);
  }

  routeChange(url){
    let routeData = '';
    if(url.tabTitle=='About'){ routeData = '/home'}
    else if(url.tabTitle=='Verify Seed'){routeData = '/launch'}
    else if(url.tabTitle=='Recent Activity'){routeData = '/activity'}
    this.router.navigateByUrl(routeData);
  }
}
