import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gs-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  currentPage = 1;
  textButton = 'Next';

  constructor(private router: Router) {}

  ngOnInit() {}

  next() {
    this.currentPage++;
    this.router.navigateByUrl(`/getting-started/${this.currentPage}`);
    this.textButton = (this.currentPage === 3) ? 'Done' : 'Next';
  }
}
