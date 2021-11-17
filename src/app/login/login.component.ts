import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {LoginService, User} from "../services/login.service";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {Router} from '@angular/router';
import {CookieService} from "ngx-cookie-service";
import {HeaderComponent} from "../header/header.component";
import {MessageService} from "primeng/api";
import {InputSwitch} from "primeng/inputswitch";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginInpt!: string;
  passwordInpt!: string;
  remember: boolean = false;
  save: boolean = false;


  constructor(private loginService: LoginService, private router: Router,
              private messageService: MessageService) {
  }

  ngOnInit(): void {

    if (localStorage.getItem('email') != null && localStorage.getItem('password') != null) {
      // @ts-ignore
      this.loginInpt = localStorage.getItem('email');
      // @ts-ignore
      this.passwordInpt = localStorage.getItem('password');

    }

  }

  changeRemember(rememb: InputSwitch) {
    console.log(rememb);
    this.save = rememb.modelValue;
  }

  forgetMe() {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
  }

  login(form: NgForm) {
    let password = form.value.password;
    let email = form.value.email;

    if (this.save)
      this.rememberLoinInput(password, email);
    else {
      this.forgetMe();
    }

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

  private rememberLoinInput(password: string, email: string) {
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    this.loginInpt = email;
    this.passwordInpt = password;
  }

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
      }, () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Rejected',
          detail: 'Try later or try another email!'
        });
        form.reset();
      });

  }
}
