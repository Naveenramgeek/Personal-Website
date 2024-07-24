import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-trajectory',
  templateUrl: './trajectory.component.html',
  styleUrls: ['./trajectory.component.css']
})
export class TrajectoryComponent implements OnInit {
  screenWidth = 0;
  constructor(private elementRef: ElementRef) {this.screenWidth = window.innerWidth; }

  ngOnInit(): void {
  }
  
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
  }
}
