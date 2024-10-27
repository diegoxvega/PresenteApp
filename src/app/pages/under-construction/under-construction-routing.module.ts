import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnderConstructionPage } from './under-construction.page';

const routes: Routes = [
  {
    path: '',
    component: UnderConstructionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnderConstructionPageRoutingModule {}
