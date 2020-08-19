import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClaimsComponent } from './claims/claims.component';
import { SearchComponent } from './search/search.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  {
    path: '',
    component: ClaimsComponent,
  },
  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: 'add',
    component: AddComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }

