import {Component, OnInit, ViewChild} from '@angular/core';
import {Message, SmpMessageService} from "../services/smp-message.service";
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

  constructor(private mesServ: SmpMessageService,
              private router: Router,
              private loginService: LoginService,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
    console.log(this.router.url);
    this.loginService.isLoggedIn().subscribe(() => {
      this.setIsLoggedInTrue();
      return;
    });
    this.setIsLoggedInFalse();
  }


  goToLogin() {

    if (!this.isLoggedIn()) {
      this.router.navigateByUrl("login");
    } else {
      this.loginService.logOut().subscribe(
        () => {
          HeaderComponent.login = false;
          this.messageService.add({severity: 'info', summary: 'Success', detail: 'You logged out!'});
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

  setIsLoggedInTrue() {
    HeaderComponent.login = true;
  }

  setIsLoggedInFalse() {
    HeaderComponent.login = false;
  }

  echo(value: string) {
    this.mesServ.getMessage(value).subscribe((mes: Message) => {
      this.message = mes.message;
      console.log(mes);
    })
  }

  post(value: string) {
    this.mesServ.postMessage(value).subscribe((x: Message) => {
      this.message = x.message;
      console.log(this.message);
    });
  }

  auth(email: string, password: string) {
    this.mesServ.auth(email, password).subscribe((x) => {
      console.log(x.status);
    });
  }

}
