import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaseStudiesRoutingModule } from './case-studies-routing.module';
import { CaseStudyComponent } from './case-study/case-study.component';

@NgModule({
  declarations: [CaseStudyComponent],
  imports: [CommonModule, CaseStudiesRoutingModule],
})
export class CaseStudiesModule {}
