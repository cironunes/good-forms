import { NgModule } from "@angular/core";
import {
  MdRadioModule,
  MdCheckboxModule,
  MdButtonModule,
  MdInputModule,
  MdToolbarModule,
  MdMenuModule,
  MdSelectModule,
  MdGridListModule,
  MdAutocompleteModule,
  MdTableModule
} from '@angular/material';

@NgModule({
  imports: [
    MdRadioModule,
    MdCheckboxModule,
    MdButtonModule,
    MdInputModule,
    MdToolbarModule,
    MdMenuModule,
    MdSelectModule,
    MdGridListModule,
    MdAutocompleteModule,
    MdTableModule
  ],
  exports: [
    MdRadioModule,
    MdCheckboxModule,
    MdButtonModule,
    MdInputModule,
    MdToolbarModule,
    MdMenuModule,
    MdSelectModule,
    MdGridListModule,
    MdAutocompleteModule,
    MdTableModule
  ]
})
export class AppMaterialModule {}