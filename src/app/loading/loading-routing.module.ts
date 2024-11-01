import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoadingPage } from './loading.page';

const routes: Routes = [
  {
    path: 'Loading',
    redirectTo:'Loading',
    pathMatch:'full',
    component: LoadingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoadingPageRoutingModule {}
