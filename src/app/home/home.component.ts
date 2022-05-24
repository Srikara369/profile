import { Component, OnInit } from '@angular/core';
import { config } from 'src/app/app-config'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  assetPath: string = config.build ? config.buildAssetPath : config.devAssetPath
  educations: any = [
    { degree: 'Bachelor of Engineering', years: '(2014-2018)', icon: 'fa fa-graduation-cap fa-2x', color: '#9C27B0', data: 'Studied and graduated in mechanical engineering. Attended various internships and industrial visits during the course. Secured and graduated with grade of 78%' },
    { degree: 'Pre-University', years: '(2012-2014)', icon: 'fa fa-graduation-cap fa-2x', color: '#673AB7', data: 'Studied 2 years of Pre-University course at Deeksha Integrated (SGPTA). I learnt Basic C programming during PCMCs stream. Graduated with 90.5% and a K-CET rank of 2458' },
    { degree: 'School', years: '(Graduated 2012)', icon: 'fa fa-graduation-cap fa-2x', color: '#FF9800', data: 'Completed SSLC from Sree Saraswathi Vidya Mandira with a score of 96.64%' }
  ];
  skills: any = [
    {
      name: 'IDEs and Tools', value: [
        { a: 'VS Code', icon: `${this.assetPath}/images/vs_code.png` },
        { a: 'IntelliJ', icon: `${this.assetPath}/images/intellij.png` },
        { a: 'Eclipse', icon: `${this.assetPath}/images/eclipse.png` },
        { a: 'JMeter', icon: `${this.assetPath}/images/jmeter.png` },
        { a: 'Postman', icon: `${this.assetPath}/images/postman.png` }
      ]
    },
    {
      name: 'Technologies', value: [
        { a: 'UI/UX', icon: `${this.assetPath}/images/UI.png` },
        { a: 'RESTAPI', icon: `${this.assetPath}/images/rest_api.png` },
        { a: 'Blockchain', icon: `${this.assetPath}/images/blockchain.png` },
        { a: 'Docker', icon: `${this.assetPath}/images/docker.png` },
        { a: 'Cloud', icon: `${this.assetPath}/images/cloud.png` }
      ]
    },
    {
      name: 'Frameworks', value: [
        { a: 'AngularJS', icon: `${this.assetPath}/images/angular.png` },
        { a: 'Angular 6', icon: `${this.assetPath}/images/angular6.png` },
        { a: 'ExpressJS', icon: `${this.assetPath}/images/expressjs.png` },
        { a: 'NodeJS', icon: `${this.assetPath}/images/nodejs.png` }
      ]
    },
    {
      name: 'Languages', value: [
        { a: 'JavaScript', icon: `${this.assetPath}/images/javascript.png` },
        { a: 'TypeScript', icon: `${this.assetPath}/images/typescript.png` },
        { a: 'Python', icon: `${this.assetPath}/images/python.png` },
        { a: 'Basic C', icon: `${this.assetPath}/images/C.png` }
      ]
    },
    {
      name: 'SCM', value: [
        { a: 'GitLab', icon: `${this.assetPath}/images/gitlab.png` },
        { a: 'GitHub', icon: `${this.assetPath}/images/github.png` },
        { a: 'Jfrog', icon: `${this.assetPath}/images/jfrog.png` }
      ]
    },
    {
      name: 'Databases', value: [
        { a: 'MongoDB', icon: `${this.assetPath}/images/mongodb.png` },
        { a: 'MySQL', icon: `${this.assetPath}/images/mysql.png` }
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
