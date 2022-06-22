import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(({ HomeModule }) => HomeModule),
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(({ RegisterModule }) => RegisterModule),
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(({ AboutModule }) => AboutModule),
  },
  {
    path: '**',
    redirectTo: '/register'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
