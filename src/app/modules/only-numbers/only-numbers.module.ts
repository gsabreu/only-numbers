import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlyNumbers } from '../only-numbers.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  	OnlyNumbers
  ],
  exports: [
  	OnlyNumbers
  ]

})
export class OnlyNumbersModule { }
