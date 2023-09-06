import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  private videoWebm =
    'https://dualbootpartners.com/wp-content/uploads/2022/12/dbp-webm.webm';
  private videoMp =
    'https://dualbootpartners.com/wp-content/uploads/2022/08/dualbootpartners.mp4';
  private videoOgv =
    'https://dualbootpartners.com/wp-content/uploads/2022/12/dbp-ogv.ogv';
  getvideoWebm(): string {
    return this.videoWebm;
  }
  getVideoMp(): string {
    return this.videoMp;
  }

  getVideoOgv(): string {
    return this.videoOgv;
  }
}
