import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DistributorComponent } from './distributor/distributor.component';
import { AppMaterialModule } from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
  ],
  declarations: [DistributorComponent],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
    DistributorComponent
  ]
})
export class SharedModule { }
