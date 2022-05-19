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
  headings:any = ["About", "Education", "Skills"]
  windowWidth: any = window.innerWidth
  assetPath: string = ''
  events1: any;

  constructor(){
    window.addEventListener('resize', (event) => {
      this.windowWidth = window.innerWidth
    })
  }

  ngOnInit() {
    this.assetPath = config.build ? config.buildAssetPath : config.devAssetPath
    this.events1 = [
      {status: 'Bachelor of Engineering', icon: 'fa fa-graduation-cap fa-2x', color: '#9C27B0', data: 'Graduated Mechanical Engineering from BNM Institute of Technology with FCD grades of 78%'},
      {status: 'Pre-University', icon: 'fa fa-graduation-cap fa-2x', color: '#673AB7', data: 'Completed PU from Deeksha Integrated (SGPTA) with 90.5% and a CET rank of 2458'},
      {status: 'School', icon: 'fa fa-graduation-cap fa-2x', color: '#FF9800', data: 'Completed SSLC from Sree Saraswathi Vidya Mandira with a score of 96.64%'}
  ]
  }

}
