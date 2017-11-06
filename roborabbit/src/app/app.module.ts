import { AppErrorHandler } from './common/app-error-handler';
import { DataService } from './data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }   from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { BoberComponent } from './bober/bober.component';
import { SkunsikDirective } from './skunsik.directive';
import { Experiments0Component } from './experiments-0/experiments-0.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { Experiments1Component } from './experiments-1/experiments-1.component';
import { DelayDirective } from './delay.directive';

@NgModule({
  declarations: [
    AppComponent,
    BoberComponent,
    SkunsikDirective,
    Experiments0Component,
    NotFoundComponent,
    Experiments1Component,
    DelayDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: Experiments0Component },
      { path: 'experiment/1/:id', component: Experiments1Component },
      { path: '**', component: NotFoundComponent }
    ])
  ],
  providers: [
    DataService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
