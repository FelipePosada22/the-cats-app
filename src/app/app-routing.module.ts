import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CatDetailsGuard } from './guard/cat-details.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cats',
    pathMatch: 'full',
    data: { animation: 'slide-in' },
  },
  {
    path: 'cats',
    loadChildren: () =>
      import('./cats/cats.module').then((m) => m.CatsPageModule),
    data: { animation: 'slide-in' },
  },
  {
    path: 'cats-details/:id',
    loadChildren: () =>
      import('./cats/cats-details/cats-details.module').then(
        (m) => m.CatsDetailsPageModule,
      ),
    canActivate: [CatDetailsGuard],
    data: { animation: 'slide-in' },
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
