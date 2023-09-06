import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bg-video',
  templateUrl: './bg-video.component.html',
  styleUrls: ['./bg-video.component.scss'],
})
export class BgVideoComponent {
  @Input() titleText1!: string;
  @Input() titleText2!: string;
  @Input() textStyle!: string;
  @Input() bodyText!: string;
  @Input() linkText!: string;
  @Input() videoOgv!: string;
  @Input() videoMp!: string;
  @Input() videoWebm!: string;
}
