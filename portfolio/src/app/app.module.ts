import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { AppComponent } from './app.component';
import { GitsummaryComponent } from './gitsummary/gitsummary.component';
import { ResumeComponent } from './resume/resume.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    GitsummaryComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
