import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'about',
    loadChildren: () =>
      import('./feature/about/about.module').then(m => m.AboutModule),
  },
  {
    path: 'case-study',
    loadChildren: () =>
      import('./feature/case-studies/case-studies.module').then(
        m => m.CaseStudiesModule
      ),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./feature/contact/contact.module').then(m => m.ContactModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./feature/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'category/insights',
    loadChildren: () =>
      import('./feature/insights/insights.module').then(m => m.InsightsModule),
  },
  {
    path: 'services',
    loadChildren: () =>
      import('./feature/page-services/page-services.module').then(
        m => m.PageServicesModule
      ),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
