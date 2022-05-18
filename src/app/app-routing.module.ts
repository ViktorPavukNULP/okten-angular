import {NgModule} from "@angular/core";
import {HomeComponent} from "./app-components/home/home.component";
import {RouterModule, Routes} from "@angular/router";

let routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
