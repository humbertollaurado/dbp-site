import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TemplatesService {
  private links = [
    { link: '', name: 'some', values: ['', 'Home'] },
    { link: 'services', name: 'services', values: ['services', 'Services'] },
    {
      link: 'case-study',
      name: 'case-study',
      values: ['case studies', 'Case studies'],
    },
    {
      link: 'category/insights',
      name: 'insights',
      values: ['insights', 'Insights'],
    },
    { link: 'about', name: 'aboout', values: ['about us', 'About us'] },
    { link: 'contact', name: 'contact', values: ["let's talk", 'Contact'] },
  ];

  getLink(): any[] {
    return this.links;
  }
}
