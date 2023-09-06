import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BgVideoComponent } from './bg-video/bg-video.component';

@NgModule({
  declarations: [BgVideoComponent],
  exports: [BgVideoComponent],
  imports: [CommonModule],
})
export class SharedModule {}
