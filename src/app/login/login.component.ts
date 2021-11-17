import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {LoginService, User} from "../services/login.service";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {Router} from '@angular/router';
import {CookieService} from "ngx-cookie-service";
import {HeaderComponent} from "../header/header.component";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
  }


  login(form: NgForm) {
    let password = form.value.password;
    let email = form.value.email;
    let lastUrl = localStorage.getItem('url');
    let url = lastUrl === null ? '/' : lastUrl;
    this.loginService.login(email, password).subscribe(
      () => {
        HeaderComponent.login = true;
        localStorage.removeItem('url');
        this.router.navigateByUrl(url);
      },
      (er) => {
        console.log(er.message);
        this.messageService.add({severity: 'error', summary: 'Rejected', detail: 'Bad credentials!'});
        form.reset();
      }
    );
  }

  // sayEcho(echo: string) {
  //   this.messageService.getMessage(echo).subscribe(
  //     (or) => {
  //       console.log(or);
  //     }
  //   )
  // }

  registrate(form: NgForm) {
    let password = form.value.password;
    let email = form.value.email;
    this.loginService.registrate(email, password).subscribe(
      (user: HttpResponse<User>) => {
        console.log(user);

        this.messageService.add({
          severity: 'info',
          summary: 'Success',
          detail: `${user.body?.email} now you can login`
        });

      },

      (er) => {
        console.log(er);

        this.messageService.add({
          severity: 'error',
          summary: 'Rejected',
          detail: 'Try later or try another email!'
        });

        form.reset();
      }
    );
  }
}
