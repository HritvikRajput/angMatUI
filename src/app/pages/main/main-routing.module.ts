import { ButtonToggleComponent } from './../button-toggle/button-toggle.component';
import { ButtonComponent } from './../button/button.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'button', component: ButtonComponent },
  { path: 'button-toggle', component: ButtonToggleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
