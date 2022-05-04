import { Component, OnInit } from '@angular/core';
import { config } from 'src/app/app-config'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  assetPath: string = ''

  constructor() { }

  ngOnInit(): void {
    this.assetPath = config.build ? config.buildAssetPath : config.devAssetPath
  }

}
