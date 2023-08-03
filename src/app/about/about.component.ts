import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
//Second Owl-Carousel
customOptions:OwlOptions={
  loop: true,
  margin:25,
  nav: false,
  //navText: ['', ''],
  dots: false,
  autoplay: true,
  autoplaySpeed: 500,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:4
      },
      1000:{
          items:4
      }
  }
  }



  // Third Owl_Carousel
customsOptions:OwlOptions={
  loop:true,
  margin:25,
  nav: false,
  //navText: ['', ''],
  dots: false,
  autoplay: true,
  autoplaySpeed: 30,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:2
      }
  }
  }
}

