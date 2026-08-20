import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CommonModule } from '@angular/common';
import * as siteData from '../../data.json';

@Component({
  selector: 'app-partners',
  standalone: true as boolean,
  imports: [CommonModule, SlickCarouselModule],
  standalone: true as boolean,
  imports: [CommonModule, SlickCarouselModule],
  imports: [CommonModule],
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css'],
})
export class PartnersComponent {
  partnersData: any = (siteData as any).default;
}

