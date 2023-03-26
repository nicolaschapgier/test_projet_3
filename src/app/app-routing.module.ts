import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NagiationPageComponent } from './nagiation-page/nagiation-page.component';

const routes: Routes = [
  { path: 'navigation', component: NagiationPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
