import { Component, OnInit } from '@angular/core';
import { VideoService } from 'src/app/shared/video.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  titleTex1 = 'We';
  textStyle = 'build';
  titleText2 = 'great software.';
  bodyText =
    'We partner with seasoned business leaders and entrepreneurs to build and transform businesses.';
  linkText = 'Work with us';
  videoWebm!: string;
  videoMp!: string;
  videoOgv!: string;
  constructor(private serviceVideo: VideoService) {}

  ngOnInit(): void {
    this.videoWebm = this.serviceVideo.getvideoWebm();
    this.videoMp = this.serviceVideo.getVideoMp();
    this.videoOgv = this.serviceVideo.getVideoOgv();
  }
}
