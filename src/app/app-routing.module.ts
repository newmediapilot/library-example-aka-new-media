import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthComponent} from './auth/auth.component';
import {LibraryComponent} from './auth/library/library.component';
import {LoginComponent} from './login/login.component';
import {CollectionComponent} from './auth/collection/collection.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: 'library',
        component: LibraryComponent
      },
      {
        path: 'collection',
        component: CollectionComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
