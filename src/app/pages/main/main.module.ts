import { MatModule } from '../../appModules/mat.module';
import { ButtonComponent } from '../button/button.component';
import { ButtonToggleComponent } from '../button-toggle/button-toggle.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';

const components = [
  ButtonComponent,
  ButtonToggleComponent
]
@NgModule({
  declarations: [
    components
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatModule
  ],
  exports: [
    components
  ]
})
export class MainModule { }
