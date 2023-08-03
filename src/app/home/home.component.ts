import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
// First Owl-Carousel
  customOptions:OwlOptions={
    loop:true,
    margin:25,
    autoplay: true,
    autoplaySpeed: 30,
    nav: false,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
  }

//Second Owl-Carousel
customOptionss:OwlOptions={
  loop: true,
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