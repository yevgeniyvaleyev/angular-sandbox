import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DooComponent } from './doo/doo.component';

const routes: Routes = [
  { path: '', component: DooComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
  DooComponent]
})
export class LazyDooModule { }
