import {Component, OnInit, ViewChild} from '@angular/core';

import {Router} from "@angular/router";
import {LoginService} from "../services/login.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild("message") message: string = 'default';

  public static login: boolean = false;
  currentUrl!: string;

  constructor(private router: Router,
              private loginService: LoginService,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
    console.log(this.router.url);
    this.firstLogin();
  }


  goToLogin() {
    if (!HeaderComponent.login) {
      this.router.navigateByUrl("login");
    } else {
      this.loginService.logOut().subscribe(
        () => {
          HeaderComponent.login = false;
          this.messageService.add({severity: 'info', summary: 'Success', detail: 'You logged out!'});
          localStorage.removeItem('url');
          this.router.navigateByUrl('/');
        },
        () => {
          this.messageService.add({severity: 'error', summary: 'Rejected', detail: 'Something went wrong!'});
        }
      )
    }
  }

  isNotLoginPage() {
    return this.router.url !== '/login';
  }

  isLoggedIn() {
    return HeaderComponent.login;
  }

  firstLogin() {
    return this.loginService.isLoggedIn().subscribe(() => {
      return this.setIsLoggedInTrue();
    }, () => {
      return this.setIsLoggedInFalse();
    });
  }

  setIsLoggedInTrue() {
    return (HeaderComponent.login = true);
  }

  setIsLoggedInFalse() {
    return (HeaderComponent.login = false);
  }


}
