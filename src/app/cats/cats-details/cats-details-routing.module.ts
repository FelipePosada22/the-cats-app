import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatsDetailsPage } from './cats-details.page';

const routes: Routes = [
  {
    path: '',
    component: CatsDetailsPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatsDetailsPageRoutingModule {}
