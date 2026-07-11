import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import * as siteData from '../../data.json';

@Component({
  selector: 'app-partners',
  standalone: true as boolean,
  imports: [CommonModule, SlickCarouselModule],
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css'],
})
export class PartnersComponent {

  partnersData: any = (siteData as any).default;
  slideConfig = {"slidesToShow": 5, "slidesToScroll": 2, "dots": true, "autoplay": true, arrows: false};

  slickInit(e: any) {
    console.log('slick initialized');
  }

  breakpoint(e: any) {
    console.log('breakpoint');
  }

  afterChange(e: any) {
    console.log('afterChange');
  }

  beforeChange(e: any) {
    console.log('beforeChange');
  }

}
