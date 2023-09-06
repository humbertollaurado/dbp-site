import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageServicesRoutingModule } from './page-services-routing.module';
import { ServicesComponent } from './services/services.component';

@NgModule({
  declarations: [ServicesComponent],
  imports: [CommonModule, PageServicesRoutingModule],
})
export class PageServicesModule {}
