import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { CarouselComponent } from './carousel/carousel.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSidenavModule, MatButtonModule, MatIconModule,CarouselComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fallen-star-farm';

  public slides: {src: string}[] = [];


  public theBoys: {src: string}[] = [
    { src: "Commet_1.jpeg" },
    { src: "Pip_1.jpeg" },
    { src: "Commet_2.jpeg" },
    { src: "Pip_2.jpeg" },
    { src: "Pip_3.jpeg" }
  ];

  public theLadies: {src: string}[] = [
    { src: "Ladies_1.jpeg" },
    { src: "Ladies_2.jpeg" },
    { src: "Ladies_3.jpeg" },
    { src: "Ladies_4.jpeg" },
    { src: "Ladies_5.jpeg" },
    { src: "Ladies_6.jpeg" },
    { src: "Ladies_7.jpeg" },
    { src: "Ladies_8.jpeg" }
  ];

  public theGoats: {src: string}[] = [
    { src: "Goats_1.jpeg" },
    { src: "Goats_2.jpeg" },
    { src: "Goats_3.jpeg" },
    { src: "Goats_4.jpeg" },
    { src: "IgII_1.jpeg" },
    { src: "IgII_2.jpeg" },
    { src: "Torch_1.jpeg" }
  ];

  public theDog: {src: string}[] = [
    { src: "Chop_1.jpeg" },
    { src: "Chop_2.jpeg" },
    { src: "Chop_3.jpeg" },
    { src: "Chop_4.jpeg" }
  ];

  public theCat: {src: string}[] = [
    { src: "Murley_1.jpeg" }
  ];
  
  public theLizard: {src: string}[] = [

  ];

  public everyone: {src: string}[] = [
    { src: "StacyAndIgii.jpg" },
    ...this.theBoys,
    ...this.theLadies,
    ...this.theGoats,
    ...this.theDog,
    ...this.theCat,
    ...this.theLizard
  ];

  ngOnInit() {
    this.slides = this.everyone;
  }

  updateCarousel(event: Event) {
    console.log((event.target as Element).id);
    switch((event.target as Element).id) {
      case "theBoys": {
        this.slides = this.theBoys;
        break;
      }
      case "theLadies": {
        this.slides = this.theLadies;
        break;
      }
      case "theGoats": {
        this.slides = this.theGoats;
        break;
      }
      case "theDog": {
        this.slides = this.theDog;
        break;
      }
      case "theCat": {
        this.slides = this.theCat;
        break;
      }
      case "theLizard": {
        this.slides = this.theLizard;
        break;
      }
      case "everyone": {
        this.slides = this.everyone;
        break;
      }

    }
  }
}
