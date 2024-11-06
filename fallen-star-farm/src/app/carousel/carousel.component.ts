import { trigger, transition, style, animate, state } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges} from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, BrowserAnimationsModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 }))
      ]),
      transition('* => void', [
        animate('300ms', style({ opacity: 0 }))
      ])
    ]),
    trigger('opacityState', [
      state('true', style({
        opacity: '1'
      })),
      state('false', style({
        opacity: '0'
      })),
      transition('* => true', animate('1000ms ease'))
    ])
  ]
})
export class CarouselComponent {

  @Input() slides: {src: string}[] = [];

  currentSlide = 0;

  constructor() {

  }

  ngOnChanges(changes: SimpleChanges) {
    this.currentSlide = 0;
   }

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length -1 : previous;
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next > this.slides.length -1 ? 0 : next;
  }
}
