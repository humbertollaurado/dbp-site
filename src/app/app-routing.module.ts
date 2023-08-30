import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './feature/services/services.component';
import { CasesStudiesComponent } from './feature/cases-studies/cases-studies.component';
import { InsightsComponent } from './feature/insights/insights.component';
import { AboutUsComponent } from './feature/about-us/about-us.component';
import { HomeComponent } from './feature/home/home.component';
import { ContactComponent } from './feature/contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'services', component: ServicesComponent },
  { path: 'case-study', component: CasesStudiesComponent },
  { path: 'insights', component: InsightsComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
