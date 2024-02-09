import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CdkAccordionModule } from '@angular/cdk/accordion';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CdkAccordionModule

  ],
  exports: [CdkAccordionModule]
})
export class MaterialModule { }
