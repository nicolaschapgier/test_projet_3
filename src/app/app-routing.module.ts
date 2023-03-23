import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassScssComponent } from './class.scss/class.scss.component';

const routes: Routes = [
  {path : "", component : ClassScssComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
