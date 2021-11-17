import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ButtonModule} from "primeng/button";
import {HttpClientModule} from '@angular/common/http';
import {HeaderComponent} from './header/header.component';
import {MessageService, SharedModule} from "primeng/api";
import {CardModule} from "primeng/card";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DataViewModule} from "primeng/dataview";
import {InputTextareaModule} from "primeng/inputtextarea";
import {InputTextModule} from "primeng/inputtext";
import {ChipsModule} from "primeng/chips";
import {RippleModule} from "primeng/ripple";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RadioButtonModule} from "primeng/radiobutton";
import {BadgeModule} from "primeng/badge";
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {AccordionModule} from "primeng/accordion";
import {ImageModule} from "primeng/image";
import {TimelineModule} from "primeng/timeline";
import {ItemsComponent} from './home/items/items.component';
import {RatingModule} from "primeng/rating";
import {PasswordModule} from "primeng/password";
import {DividerModule} from "primeng/divider";
import {OrderComponent} from './home/order/order.component';
import {ToastModule} from "primeng/toast";
import {AdminComponent} from './home/admin/admin.component';
import {AuthService} from "./services/auth.service";
import {AuthGuard} from "./services/auth-guard.service";
import {TableModule} from "primeng/table";
import {DropdownModule} from "primeng/dropdown";
import {SelectButtonModule} from "primeng/selectbutton";
import {ClipboardModule} from "@angular/cdk/clipboard";
import {InputSwitchModule} from "primeng/inputswitch";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {CookieService} from "ngx-cookie-service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    ItemsComponent,
    OrderComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    HttpClientModule,
    SharedModule,
    DataViewModule,
    ChipsModule,
    CardModule,
    RippleModule,
    FormsModule,
    InputTextModule,
    InputTextareaModule,
    BadgeModule,
    AccordionModule,
    ImageModule,
    BrowserAnimationsModule,
    TimelineModule,
    RatingModule,
    PasswordModule,
    DividerModule,
    ToastModule,
    TableModule,
    DropdownModule,
    ReactiveFormsModule,
    SelectButtonModule,
    ClipboardModule,
    InputSwitchModule,
    DragDropModule
  ],
  providers: [MessageService, AuthService, AuthGuard, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
