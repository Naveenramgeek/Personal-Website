import { Component, OnInit, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.css']
})
export class AboutSectionComponent implements OnInit {
  screenWidth = 0;
  constructor(private elementRef: ElementRef) {this.screenWidth = window.innerWidth; }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
    onResize(event: any) {
      this.screenWidth = window.innerWidth;
    }
}
