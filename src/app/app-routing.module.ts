import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: '/login',
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  // {
  //   path:'register',
  //   component:RegisterComponent
  // },
  {
  path: 'home',
  component:HomeComponent
  },
  {
path:'about',
component: AboutComponent
  },
  {
path:'products',
component:ProductsComponent
  },

   {
     path:'**',
     component:PageNotFoundComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
