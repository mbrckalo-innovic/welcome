import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GettingStartedComponent } from './components/getting-started/getting-started.component';
import { FirstPageComponent } from './components/getting-started/first-page/first-page.component';
import { SecondPageComponent } from './components/getting-started/second-page/second-page.component';
import { ThirdPageComponent } from './components/getting-started/third-page/third-page.component';

const routes: Routes = [
  {
    path: 'getting-started',
    component: GettingStartedComponent,
    children: [
      {
        path: '1',
        component: FirstPageComponent
      },
      {
        path: '2',
        component: SecondPageComponent
      },
      {
        path: '3',
        component: ThirdPageComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: 'getting-started/1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
