import { Component, OnInit } from '@angular/core';
import { TemplatesService } from 'src/app/shared/templates.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  links: any[] = [];

  constructor(private serviceTemplates: TemplatesService) {}

  ngOnInit(): void {
    this.links = this.serviceTemplates.getLink();
  }

  trackByName(index: number, link: any): string {
    return link.name;
  }
}
