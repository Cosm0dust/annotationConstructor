import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import { ResultComponent } from './components/result/result.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AreaTransformPipe } from './pipes/area-transform.pipe';
import { GenitivePipe } from './pipes/genitive.pipe';
import { NavComponent } from './components/nav/nav.component';
import { ExperComponent } from './components/exper/exper.component';
import { BasicInfoComponent } from './components/exper/basic-info/basic-info.component';
import { AddressComponent } from './components/exper/address/address.component';
import { TitleComponent } from './components/home/analise/title/title.component';
import { HistoricalComponent } from './components/home/analise/historical/historical.component';
import { TheoryComponent } from './components/home/analise/theory/theory.component';
import { VocalComponent } from './components/home/analise/vocal/vocal.component';
import { PerformanceComponent } from './components/home/analise/performance/performance.component';
import { DifficultiesComponent } from './components/home/analise/difficulties/difficulties.component';
import { TitleResultComponent } from './components/home/result/title-result/title-result.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ResultComponent,
    HomeComponent,
    NotfoundComponent,
    AreaTransformPipe,
    GenitivePipe,
    NavComponent,
    ExperComponent,
    BasicInfoComponent,
    AddressComponent,
    TitleComponent,
    HistoricalComponent,
    TheoryComponent,
    VocalComponent,
    PerformanceComponent,
    DifficultiesComponent,
    TitleResultComponent,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
