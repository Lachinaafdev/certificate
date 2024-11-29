import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'gift',

    loadComponent: () =>
      import('./home-screen/home-screen.component').then(
        (c) => c.HomeScreenComponent
      ),
  },
  {
    path: 'test',

    loadComponent: () =>
      import('./mtest/mtest.component').then((c) => c.MtestComponent),
  },
  {
    path: 'OPEN',

    loadComponent: () =>
      import('./gift/gift.component').then((c) => c.GiftComponent),
  },
];
