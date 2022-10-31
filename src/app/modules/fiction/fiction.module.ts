import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FictionRoutingModule } from './fiction-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FictionRoutingModule,
    SharedModule
  ]
})
export class FictionModule { }
