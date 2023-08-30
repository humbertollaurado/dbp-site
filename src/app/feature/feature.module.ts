import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { CasesStudiesComponent } from './cases-studies/cases-studies.component';
import { InsightsComponent } from './insights/insights.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    HomeComponent,
    ServicesComponent,
    CasesStudiesComponent,
    InsightsComponent,
    AboutUsComponent,
    ContactComponent,
  ],
  imports: [CommonModule],
})
export class FeatureModule {}
