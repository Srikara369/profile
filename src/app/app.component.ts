import { Component, OnInit } from '@angular/core';
import { config } from 'src/app/app-config'
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Profile';
  headings: any = ["About", "Education", "Skills"]
  windowWidth: any = window.innerWidth

  constructor() {
    window.addEventListener('resize', (event) => {
      this.windowWidth = window.innerWidth
    })
  }

  ngOnInit() {
  }

}
