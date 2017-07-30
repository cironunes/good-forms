import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateDrivenComponent } from "./template-driven/template-driven.component";
import { ModelDrivenComponent } from "./model-driven/model-driven.component";



const routes: Routes = [
  {
    path: '',
    redirectTo: '/template-driven',
    pathMatch: 'full'
  },
  {
    path: 'template-driven',
    component: TemplateDrivenComponent
  },
  {
    path: 'model-driven',
    component: ModelDrivenComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
