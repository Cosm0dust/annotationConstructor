import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {Title} from "@angular/platform-browser";
import {NotfoundComponent} from "./components/notfound/notfound.component";
import {ResultComponent} from "./components/result/result.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'result', component: ResultComponent},
  {path: '**', component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
