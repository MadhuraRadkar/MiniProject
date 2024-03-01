import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) }, 
{ path: 'categories', loadChildren: () => import('./categories/categories.module').then(m => m.CategoriesModule) },
{ path: 'Register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) },
{ path: 'Login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
{ path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
{ path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },
{ path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
{ path: 'confirm/:id', loadChildren: () => import('./confirm/confirm.module').then((m)=> m.ConfirmModule) }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
