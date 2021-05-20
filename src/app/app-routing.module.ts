import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NologinGuard } from './seguridad/nologin.guard';
import { LoginGuard } from './seguridad/login.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [ LoginGuard ],
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    canActivate: [ NologinGuard ]
  },
  {
    path: 'nuevoproducto',
    loadChildren: () => import('./pages/nuevoproducto/nuevoproducto.module').then( m => m.NuevoproductoPageModule)
  },
  {
    path: 'editar-producto/:id',
    loadChildren: () => import('./pages/editar-producto/editar-producto.module').then( m => m.EditarProductoPageModule)
  },
  
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
