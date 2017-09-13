import { NgModule } from '@angular/core';
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
  MdTableModule,
  MdCardModule,
  MdTabsModule
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
    MdTableModule,
    MdCardModule,
    MdTabsModule
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
    MdTableModule,
    MdCardModule,
    MdTabsModule
  ]
})
export class AppMaterialModule {}
