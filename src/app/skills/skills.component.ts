import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  screenWidth = 0;
  constructor(private elementRef: ElementRef) {this.screenWidth = window.innerWidth; }

  ngOnInit(): void {
  }
  
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
  }
}
