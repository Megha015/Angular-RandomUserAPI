import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserdetailComponent } from './components/userdetail/userdetail.component';
import { UserComponent } from './components/user/user.component';
import { useAnimation } from '@angular/animations';
import { UserResolver } from './services/user.resolver';

const routes: Routes = [
  {
    path: 'user',
    component: UserComponent,
  },
  {
    path: 'user/:uuid',

    component: UserdetailComponent,

    resolve: { resolvedResponse: UserResolver },
  },

  {
    path: '**',
    redirectTo: 'user',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
