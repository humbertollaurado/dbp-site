import { Injectable } from '@angular/core';
import { ILink } from '../Interfaces/ilink.interface';
import { IKeyValuePair } from '../Interfaces/iKeyValuePair.interface';

@Injectable({
  providedIn: 'root',
})
export class TemplatesService {
  links: ILink[] = [
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

  socialNetwork: IKeyValuePair[] = [
    { id: '1', value: 'LinkedIn' },
    { id: '2', value: 'Twitter' },
    { id: '3', value: 'Instagram' },
  ];
}
