import { Component, inject } from '@angular/core';
import { ILink } from '../Interfaces/ilink.interface';
import { TemplatesService } from '../services/templates.service';
import { IKeyValuePair } from '../Interfaces/iKeyValuePair.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  templateService = inject(TemplatesService);

  trackByName(index: number, link: ILink): string {
    return link.name;
  }

  trackBy(index: number, link: IKeyValuePair): string {
    return link.id;
  }
}
