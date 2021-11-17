import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {OrderComponent} from "./home/order/order.component";
import {AdminComponent} from "./home/admin/admin.component";
import {AuthGuard} from "./services/auth-guard.service";

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: "login", component: LoginComponent},
    {path: 'orders/:id', component: OrderComponent},
    {path: 'admin', component: AdminComponent, canActivate: [AuthGuard]}
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
